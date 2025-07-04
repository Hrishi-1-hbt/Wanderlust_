module.exports.confirmBooking = async (req, res) => {
    try {
        const { bookingDate, guests, duration } = req.body;
        const listingId = req.params.id;

        const existingBooking = await Booking.findOne({ listingId, bookingDate });
        if (existingBooking) {
            return res.status(400).send("This listing is already booked for the selected date.");
        }

        const listing = await Listing.findById(listingId);
        if (!listing) {
            return res.status(404).send("Listing not found.");
        }

        const booking = new Booking({
            listingId,
            bookingDate,
            guests,
            duration,
            userId: req.user._id,
            isPaid: false,
        });

        await booking.save();

        const pricePerDay = listing.price;
        const totalPrice = calculatePrice(booking, pricePerDay);

        
        res.render('payment.ejs', {
            booking,
            totalPrice,
            razorpayKeyId: process.env.RAZORPAY_KEY_ID // ✅ This fixes the error
        });

    } catch (error) {
        console.error("Error confirming booking:", error);
        res.status(500).send("Server error, please try again.");
    }
};
