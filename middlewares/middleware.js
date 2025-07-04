// const listing=require("../models/listing.js");
// const reviews=require("../models/reviews.js");
// const { ERROR_LOGIN_REQUIRED, ERROR_NO_PERMISSION, ERROR_NOT_AUTHOR } = require('../constants.js');

// module.exports.isLoggedIn=(req,res,next) =>{
//     if(!req.isAuthenticated()) {
//         req.session.redirectUrl=req.originalUrl;
//         req.flash("error",ERROR_LOGIN_REQUIRED);
//         return res.redirect("/login");
//     }
//     next();
// } //to ensure user is logged in while edit and create

// module.exports.saveRedirectUrl=(req,res,next) =>{
//     if(req.session.redirectUrl) {
//         res.locals.redirectUrl=req.session.redirectUrl;
//     }
//     next();
// }
// //to save the path user triggered after redirect to login first
//  module.exports.isOwner=async (req,res,next) => {
//     let {id} =req.params;
//     const editList = await listing.findById(id);
//     if (!req.user || !editList.owner._id.equals(res.locals.currUser._id)) {
//         req.flash('error', ERROR_NO_PERMISSION);
//         return res.redirect(`/listing/${id}`);
//     }
//     next();
//  }

//  module.exports.isAuthor=async (req,res,next) => {
//     let {id,reviewId} =req.params;
//     const review = await reviews.findById(reviewId);
//     if (!review.author._id.equals(res.locals.currUser._id)) {
//         req.flash('error', ERROR_NOT_AUTHOR);
//         return res.redirect(`/listing/${id}`);
//     }
//     next();
//  }
 
// //ADMIN ACESS
//  module.exports.isAdmin=async (req, res, next) =>{
//     if (req.isAuthenticated() && req.user.isAdmin) {
//         return next();
//     }
//     res.status(403).send("Access denied.");
// }

// const crypto = require("crypto");

// exports.verifyPayment = (req, res) => {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     const expectedSignature = crypto
//         .createHmac("sha256", process.env.RAZORPAY_SECRET)
//         .update(`${razorpay_order_id}|${razorpay_payment_id}`)
//         .digest("hex");

//     if (expectedSignature === razorpay_signature) {
//         // ✅ save booking as paid
//         return res.json({ success: true });
//     } else {
//         return res.json({ success: false });
//     }
// };
const listing = require("../models/listing.js");
const reviews = require("../models/reviews.js");
const { ERROR_LOGIN_REQUIRED, ERROR_NO_PERMISSION, ERROR_NOT_AUTHOR } = require('../constants.js');
const crypto = require("crypto");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", ERROR_LOGIN_REQUIRED);
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const editList = await listing.findById(id);
        if (!editList) {
            req.flash('error', 'Listing not found');
            return res.redirect('/listing');
        }
        if (!req.user || !editList.owner._id.equals(req.user._id)) {
            req.flash('error', ERROR_NO_PERMISSION);
            return res.redirect(`/listing/${id}`);
        }
        next();
    } catch (err) {
        console.error("Error in isOwner middleware:", err);
        next(err);
    }
};

module.exports.isAuthor = async (req, res, next) => {
    try {
        const { id, reviewId } = req.params;
        const review = await reviews.findById(reviewId);
        if (!review) {
            req.flash('error', 'Review not found');
            return res.redirect(`/listing/${id}`);
        }
        if (!review.author._id.equals(req.user._id)) {
            req.flash('error', ERROR_NOT_AUTHOR);
            return res.redirect(`/listing/${id}`);
        }
        next();
    } catch (err) {
        console.error("Error in isAuthor middleware:", err);
        next(err);
    }
};

module.exports.isAdmin = async (req, res, next) => {
    try {
        if (req.isAuthenticated() && req.user.isAdmin) {
            return next();
        }
        req.flash('error', 'Access denied. Admin privileges required.');
        return res.redirect('/listing');
    } catch (err) {
        console.error("Error in isAdmin middleware:", err);
        next(err);
    }
};

module.exports.verifyPayment = (req, res, next) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    try {
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (expectedSignature === razorpay_signature) {
            return res.json({ success: true });
        } else {
            return res.json({ success: false });
        }
    } catch (err) {
        console.error("Error in verifyPayment:", err);
        next(err);
    }
};

