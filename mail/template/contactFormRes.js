// /** @format */

// exports.contactUsEmail = (email, firstname, lastname, message) => {
// 	return `<!DOCTYPE html>
//     <html>
    
//     <head>
//         <meta charset="UTF-8">
//         <title>Contact Form Confirmation</title>
//         <style>
//             body {
//                 background-color: #ffffff;
//                 font-family: Arial, sans-serif;
//                 font-size: 16px;
//                 line-height: 1.4;
//                 color: #333333;
//                 margin: 0;
//                 padding: 0;
//             }
    
    
//             .container {
//                 max-width: 600px;
//                 margin: 0 auto;
//                 padding: 20px;
//                 text-align: center;
//             }
    
//             .logo {
//                 max-width: 200px;
//                 margin-bottom: 20px;
//             }
    
//             .message {
//                 font-size: 18px;
//                 font-weight: bold;
//                 margin-bottom: 20px;
//             }
    
//             .body {
//                 font-size: 16px;
//                 margin-bottom: 20px;
//             }
    
//             .cta {
//                 display: inline-block;
//                 padding: 10px 20px;
//                 background-color: #FFD60A;
//                 color: #000000;
//                 text-decoration: none;
//                 border-radius: 5px;
//                 font-size: 16px;
//                 font-weight: bold;
//                 margin-top: 20px;
//             }
    
//             .support {
//                 font-size: 14px;
//                 color: #999999;
//                 margin-top: 20px;
//             }
    
//             .highlight {
//                 font-weight: bold;
//             }
//         </style>
    
//     </head>
    
//     <body>
//         <div class="container">
//             <div class="message">Contact Form Confirmation</div>
//             <div class="body">
//                 <p>Dear ${firstname} ${lastname},</p>
//                 <p>Thank you for contacting us. We have received your message and will respond to you as soon as possible.
//                 </p>
//                 <p>Here are the details you provided:</p>
//                 <p>Name: ${firstname + " " + lastname}</p>
//                 <p>Email: ${email}</p>
//                 <p>Message: ${message}</p>
//                 <p>We appreciate your interest and will get back to you shortly. </p>
//             </div>
//             <div class="support">If you have any further questions or need immediate assistance, please feel free to reach
//                 out to us at <a href="mailto:hrushikeshtingani28@gmail.com">info@wandhruerlust.com</a>. We are here to help!</div>
//         </div>
//     </body>
    
//     </html>`;
// };


exports.contactUsEmail = (email, firstname, lastname, message) => {
	return `<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Contact Form Notification</title>
	<style>
		body {
			background-color: #ffffff;
			font-family: Arial, sans-serif;
			font-size: 16px;
			line-height: 1.6;
			color: #333333;
			margin: 0;
			padding: 0;
		}
		.container {
			max-width: 600px;
			margin: 0 auto;
			padding: 20px;
			text-align: left;
		}
		.header {
			text-align: center;
			font-size: 22px;
			font-weight: bold;
			margin-bottom: 20px;
			color: #000;
		}
		.details {
			margin-bottom: 20px;
		}
		.footer {
			font-size: 14px;
			color: #888;
			margin-top: 30px;
			text-align: center;
		}
	</style>
</head>

<body>
	<div class="container">
		<div class="header">New Contact Form Submission</div>
		<p>Hello,</p>
		<p>This is a confirmation that the following message has been submitted via the contact form on Wanderlust.</p>

		<div class="details">
			<p><strong>Name:</strong> ${firstname} ${lastname}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Message:</strong></p>
			<p>${message}</p>
		</div>

		<p>Thank you for reaching out. If this message requires a response, someone from our team will be in touch shortly.</p>

		<div class="footer">
			Wanderlust &copy; ${new Date().getFullYear()} — All rights reserved.
		</div>
	</div>
</body>

</html>`;
};

