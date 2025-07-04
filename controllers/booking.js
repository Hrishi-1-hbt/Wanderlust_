const Razorpay = require('razorpay');
const Booking = require('../models/booking');
const Listing = require('../models/listing');
const crypto = require('crypto');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Show booking form page

module.exports.showBookingForm = async (req, res) => {
  try {
    const listingId = req.params.id;
    const list = await Listing.findById(listingId);
    if (!list) {
      return res.status(404).send("Listing not found.");
    }
    // Render the booking form view with the listing data
    res.render('booking', { list });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};


// Helper function to calculate total price
function calculatePrice(booking, pricePerDay) {
  return booking.duration * pricePerDay;
}

// Confirm booking and render payment page
module.exports.confirmBooking = async (req, res) => {
  try {
    const { bookingDate, guests, duration } = req.body;
    const listingId = req.params.id;

    // Validate inputs (simple example)
    if (!bookingDate || !guests || !duration) {
      const list = await Listing.findById(listingId);
      return res.render('booking', { list, error: 'All fields are required.', success: null });
    }

    // Check if booking exists on date for listing
    const existingBooking = await Booking.findOne({ listingId, bookingDate });
    if (existingBooking) {
      const list = await Listing.findById(listingId);
      return res.render('booking', { list, error: 'This listing is already booked for the selected date.', success: null });
    }

    // Find listing for price
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(404).send('Listing not found');
    }

    // Create booking
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

    const totalPrice = calculatePrice(booking, listing.price);

    // Create Razorpay order for payment
    const options = {
      amount: totalPrice * 100, // paise
      currency: 'INR',
      receipt: `receipt_order_${booking._id}`,
    };
    const razorpayOrder = await razorpay.orders.create(options);

    // Render payment page with booking and order
    res.render('payment', {
      booking,
      totalPrice,
      razorpayKeyId: process.env.RAZORPAY_KEY_ID,
      razorpayOrder,
    });
  } catch (error) {
    console.error('Error confirming booking:', error);
    res.status(500).send('Server error, please try again.');
  }
};

// Render payment page for existing booking
module.exports.renderPaymentPage = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await Booking.findById(bookingId).populate('userId');
    if (!booking) {
      return res.status(404).send('Booking not found');
    }

    const totalPrice = booking.price * booking.duration;

    const options = {
      amount: totalPrice * 100,
      currency: 'INR',
      receipt: `receipt_order_${booking._id}`,
    };
    const razorpayOrder = await razorpay.orders.create(options);

    res.render('payment', {
      booking,
      totalPrice,
      razorpayKeyId: process.env.RAZORPAY_KEY_ID,
      razorpayOrder,
    });
  } catch (error) {
    console.error('Error rendering payment page:', error);
    res.status(500).send('Something went wrong. Please try again later.');
  }
};

// Confirm payment webhook/callback
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
    if (!booking) {
      return res.status(404).send('Booking not found');
    }

    booking.isPaid = true;
    booking.paymentDetails = { razorpay_payment_id, razorpay_order_id };
    await booking.save();

    res.status(200).json({ status: 'success' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: 'failure' });
  }
};
