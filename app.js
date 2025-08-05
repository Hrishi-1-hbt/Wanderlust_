// Entry point of your Wanderlust app

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const port = process.env.PORT || 8080;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const multer = require("multer");
const { storage } = require("./cloudConfig.js");
const upload = multer({ storage });
const cookieparser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const cors = require("cors");

const User = require("./models/user.js");
const listingRoutes = require("./routes/booking");
const asyncwrap = require("./utils/error.js");
const Blog = require("./models/blog.js");
const Listing = require("./models/listing.js");
const feedbackController = require("./controllers/feedback");
const {
  isLoggedIn,
  isAdmin,
  isOwner,
  isAuthor,
  saveRedirectUrl
} = require("./middlewares/middleware.js");

const adminController = require("./controllers/admin.js");
const userController = require("./controllers/user.js");
const profileController = require("./controllers/profile.js");
const othersController = require("./controllers/others.js");
const { contactUsController } = require("./controllers/contactUs.js");
const reviewsController = require("./controllers/reviews.js");
const listingController = require("./controllers/listing.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl).then(() => console.log("DB connected"));

// Middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cookieparser());
app.use(cors({ origin: true, credentials: true }));

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: { secret: process.env.SECRET },
  touchAfter: 24 * 3600,
});

app.use(session({
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user || null;
  res.locals.isLoggedIn = req.isAuthenticated();

  if (req.user?.profilePicture?.purl) {
    res.locals.profilePic = req.user.profilePicture.purl.replace("/upload", "/upload/q_auto,e_blur:50,w_250,h_250");
  }

  next();
});

// Routes
app.use("/", listingRoutes);

// Auth Routes
app.route("/login")
  .get((req, res) => res.render("login"))
  .post(saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }), (req, res) => {
    req.flash("success", "Welcome back!");
    const redirect = res.locals.redirectUrl || "/listing";
    return res.redirect(redirect);
  });

app.get("/signup", userController.signupRender);
app.post("/signup", userController.siggnedUp);
app.get("/logout", isLoggedIn, userController.logout);

// Forgot & Reset Password
app.get("/forgot-password", userController.forgotPassword);
app.post("/resetlink-password", userController.passwordResetLink);
app.get("/resetPassword/:token", userController.resetPasswordTokenGet);
app.patch("/resetPassword/:token", userController.resetPasswordTokenPatch);

// Profile
app.get("/profile", isLoggedIn, profileController.viewProfile);
app.get("/profile/edit", isLoggedIn, profileController.profileGet);
app.post("/profile/edit", isLoggedIn, upload.single("profileimage"), profileController.profilePost);

// Listings
app.get("/listing", listingController.index);
app.get("/listing/new", isLoggedIn, listingController.newpost);
app.post("/listing", isLoggedIn, upload.array("listing[image]", 4), listingController.createpost);
app.post("/listing/search", listingController.search);
app.get("/listing/:id/edit", isLoggedIn, isOwner, listingController.editpost);
app.put("/listing/:id", isLoggedIn, isOwner, upload.array("listing[image]", 4), listingController.saveEditpost);
app.delete("/listing/:id", isLoggedIn, isOwner, listingController.deletepost);
app.get("/listing/:id", listingController.showPost);
app.post("/listing/:id/like", isLoggedIn, listingController.likeListing);

// Reviews
app.post("/listing/:id/review", isLoggedIn, reviewsController.reviewPost);
app.delete("/listing/:id/review/:reviewId", isLoggedIn, isAuthor, reviewsController.deleteReview);

// Feedback
app.get("/feedback", isLoggedIn, feedbackController.renderFeedback);
app.post("/feedback", isLoggedIn, feedbackController.feedbackPost);

// Blogs
app.get("/blogs", isLoggedIn, asyncwrap(async (req, res) => {
  const blogs = await Blog.find({}).populate("blogOwner");
  res.render("blog", { blogs });
}));

app.post("/blogs", isLoggedIn, upload.single("blog[image]"), asyncwrap(async (req, res) => {
  const { title, content, location } = req.body.blog;
  const newBlog = new Blog({
    title, content, location,
    blogOwner: req.user._id,
    images: req.file ? [{ imgUrl: req.file.path, imgFilename: req.file.filename }] : []
  });
  await newBlog.save();
  req.flash("success", "Blog created");
  res.redirect("/blogs");
}));

app.delete("/blogs/:id", asyncwrap(async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/blogs");
}));

// Admin Routes
app.get("/admin/dashboard", isLoggedIn, isAdmin, adminController.dashboard);
app.get("/admin/users", isLoggedIn, isAdmin, adminController.showuser);
app.delete("/admin/user/:id", isLoggedIn, isAdmin, adminController.deleteUser);
app.delete("/admin/listing/:id", isLoggedIn, isAdmin, adminController.deleteListing);
app.get("/admin/listing/:id", isLoggedIn, isAdmin, adminController.viewIndividualListing);
app.get("/admin/reviews/:id", isLoggedIn, isAdmin, adminController.viewListingReview);
app.delete("/admin/listing/:id/reviews/:reviewId", isLoggedIn, isAdmin, adminController.deleteListingReview);
app.get("/admin/listing/edit/:id", isLoggedIn, isAdmin, adminController.adminListEditRender);
app.put("/admin/listing/edit/:id", isLoggedIn, isAdmin, upload.array("listing[image]", 10), adminController.adminSaveEditList);
app.get("/admin/feedbacks", isLoggedIn, isAdmin, adminController.showFeedbacks);
app.delete("/admin/feedbacks/:id", isLoggedIn, isAdmin, adminController.deleteFeedback);
app.post("/admin/feedbacks/:id/toggleDisplay", isLoggedIn, isAdmin, adminController.displayFeedback);

// Static Pages
app.get("/contact", othersController.contactPage);
app.post("/contact", asyncwrap(contactUsController));
app.get("/about", othersController.aboutPage);
app.get("/terms", othersController.termsPage);
app.get("/privacy", othersController.privacyPage);
app.get("/contributors", othersController.contributors);

// Catch-All & Error Handling
app.use("*", (req, res) => res.render("not_found"));
app.use((err, req, res, next) => {
  const { status = 500, msg = "Something went wrong" } = err;
  console.error("Error:", err);
  if (res.headersSent) return next(err);
  res.status(status).render("error", { msg, status });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
