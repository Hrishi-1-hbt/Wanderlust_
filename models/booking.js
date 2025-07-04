const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
  bookingDate: { type: Date, required: true },
  guests: { type: Number, required: true },
  duration: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isPaid: { type: Boolean, default: false },
  price: { type: Number, required: true },  // price per day stored here
  paymentDetails: {
    razorpay_payment_id: String,
    razorpay_order_id: String,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
