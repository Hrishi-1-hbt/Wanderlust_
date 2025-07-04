// /** @format */

const { contactUsEmail } = require("../mail/template/contactFormRes");
const mailSender = require("../utils/mailSender");

// exports.contactUsController = async (req, res) => {
//     console.log("REQ KI BODY");
// 	const { firstname, lastname, email, message, subject } = req.body;
// 	// console.log(req.body);
// 	console.log("Full error object:\n", error);

// 	try {
// 		const emailRes = await mailSender(
// 			email,
// 			subject,
// 			contactUsEmail(email, firstname, lastname, message)
// 		);

//         // console.log("Email Res ", emailRes);
//         req.flash("success", "Your response saved successfully");
// 		return res.redirect("/contact");
// 		//
// 	} catch (error) {
//         console.log("Error message:\n", error.message);
//         req.flash("error", "Unable to get your response!")
// 		return res.redirect("/contact");
// 	}
// };

exports.contactUsController = async (req, res) => {
    console.log("REQ KI BODY");
	const { firstname, lastname, email, message, subject } = req.body;

	try {
		// const emailRes = await mailSender(
		// 	email,
		// 	subject,
		// 	contactUsEmail(email, firstname, lastname, message)
		// );
		const emailRes = await mailSender(
			process.env.MAIL_USER, // <- send it to your own Gmail
			`New Contact Form Submission: ${subject}`,
			contactUsEmail(email, firstname, lastname, message)
		);
		

        req.flash("success", "Your response saved successfully");
		return res.redirect("/contact");

	} catch (error) {
        console.log("Error message:\n", error.message);
        req.flash("error", "Unable to get your response!");
		return res.redirect("/contact");
	}
};


