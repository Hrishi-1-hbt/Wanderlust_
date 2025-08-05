const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking');
const { isLoggedIn } = require('../middlewares/middleware');

router.get('/bookings/new/:id', isLoggedIn, bookingController.showBookingForm);
router.post('/bookings/my-bookings/:id', isLoggedIn, bookingController.confirmBooking);
router.get('/bookings/payment/:id', isLoggedIn, bookingController.renderPaymentPage);
router.post('/bookings/payment/confirm/:bookingId', bookingController.confirmPayment);
router.get('/success', (req, res) => res.render('success'));
router.get('/paymentStatus', (req, res) => {
  const status = req.query.status || 'failure';
  res.render('paymentStatus', { status });
});

module.exports = router;
