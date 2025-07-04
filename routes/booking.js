const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking');
const { isLoggedIn } = require('../middlewares/middleware'); // Corrected path to existing middleware
const booking = require('../models/booking');


// Show booking form for a listing
router.get('/bookings/new/:id', isLoggedIn, bookingController.showBookingForm);

// Handle booking form submission
router.post('/bookings/my-bookings/:id', isLoggedIn, bookingController.confirmBooking);

// Render payment page for an existing booking
router.get('/bookings/payment/:id', isLoggedIn, bookingController.renderPaymentPage);

// Confirm payment webhook/callback
router.post('/bookings/payment/confirm/:bookingId', bookingController.confirmPayment);

router.get('/success',(req, res) => {
  res.render('success');
});

router.get('/paymentStatus', (req, res) => {
  const status = req.query.status || 'failure';
  res.render('paymentStatus', { status });
});


module.exports = router;
