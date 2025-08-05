const Razorpay = require('razorpay');
const Booking = require('../models/booking');
const Listing = require('../models/listing');
const crypto = require('crypto');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

module.exports.showBookingForm = async (req, res) => {
  try {
    const list = await Listing.findById(req.params.id);
    if (!list) return res.status(404).send("Listing not found.");
    res.render('booking', { list });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

function calculatePrice(duration, pricePerDay) {
  return duration * pricePerDay;
}

module.exports.confirmBooking = async (req, res) => {
  try {
    const { bookingDate, guests, duration } = req.body;
    const listingId = req.params.id;

    if (!bookingDate || !guests || !duration) {
      const list = await Listing.findById(listingId);
      return res.render('booking', { list, error: 'All fields are required.', success: null });
    }

    const existingBooking = await Booking.findOne({ listingId, bookingDate });
    if (existingBooking) {
      const list = await Listing.findById(listingId);
      return res.render('booking', { list, error: 'Already booked for this date.', success: null });
    }

    const listing = await Listing.findById(listingId);
    if (!listing) return res.status(404).send('Listing not found');

    const booking = new Booking({
      listingId,
      bookingDate,
      guests,
      duration,
      userId: req.user._id,
      isPaid: false,
      price: listing.price,
    });

    await booking.save();

    const totalPrice = calculatePrice(duration, listing.price);
    const razorpayOrder = await razorpay.orders.create({
      amount: totalPrice * 100,
      currency: 'INR',
      receipt: `receipt_order_${booking._id}`,
    });

    res.render('payment', {
      booking,
      totalPrice,
      razorpayKeyId: process.env.RAZORPAY_KEY_ID,
      razorpayOrder,
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).send('Server error');
  }
};

module.exports.renderPaymentPage = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('userId');
    if (!booking) return res.status(404).send('Booking not found');

    const totalPrice = booking.duration * booking.price;
    const razorpayOrder = await razorpay.orders.create({
      amount: totalPrice * 100,
      currency: 'INR',
      receipt: `receipt_order_${booking._id}`,
    });

    res.render('payment', {
      booking,
      totalPrice,
      razorpayKeyId: process.env.RAZORPAY_KEY_ID,
      razorpayOrder,
    });
  } catch (error) {
    console.error('Payment page error:', error);
    res.status(500).send('Something went wrong.');
  }
};

module.exports.confirmPayment = async (req, res) => {
  const { bookingId } = req.params;
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  const generated_signature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest('hex');

  if (generated_signature !== razorpay_signature) {
    return res.status(400).send('Invalid signature');
  }

  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).send('Booking not found');

    booking.isPaid = true;
    booking.paymentDetails = { razorpay_payment_id, razorpay_order_id };
    await booking.save();

    res.status(200).json({ status: 'success' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: 'failure' });
  }
};
