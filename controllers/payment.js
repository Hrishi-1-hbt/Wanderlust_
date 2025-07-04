const Razorpay = require('razorpay');
const Booking = require('../models/booking');
const Listing = require('../models/listing');

exports.renderPaymentPage = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).send("Booking not found");

        const listing = await Listing.findById(booking.listingId);
        const totalPrice = booking.duration * listing.price;

        const razorpayInstance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET
        });

        const order = await razorpayInstance.orders.create({
            amount: totalPrice * 100,
            currency: "INR",
            receipt: `rcpt_${booking._id}`,
        });

        // Optionally save order ID in DB
        booking.razorpayOrderId = order.id;
        await booking.save();

        res.render("bookings/payment", {
            booking,
            totalPrice,
            razorpayOrder: order,
            razorpayKeyId: process.env.RAZORPAY_KEY_ID,
            user: req.user,
            csrfToken: req.csrfToken && req.csrfToken() // optional
        });
    } catch (err) {
        console.error("Error rendering payment page:", err);
        res.status(500).send("Internal Server Error");
    }
};
