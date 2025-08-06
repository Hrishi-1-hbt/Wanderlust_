# 🌍 Wanderlust - Full Stack Accommodation Booking Web App

A full-stack web application inspired by Airbnb for booking and listing accommodations. Built with the MERN stack (MongoDB, Express.js, Node.js) and rendered using EJS templates, Wanderlust provides secure authentication, seamless payments, and AI-powered support to enhance the user experience.

🚀 **Live Demo**: [Wanderlust Deployed App](https://wanderlust-p0sz.onrender.com/listing)

---

## 📌 Features

- 🔐 Secure user authentication & session management with Passport.js
- 🏘️ Dynamic listing creation for hosts and users
- 💳 Integrated payment gateway for secure transactions
- 🤖 AI Chatbot powered by OpenAI API for real-time assistance
- 🌐 Multi-language support via Google Translate API
- 📩 Contact form with email functionality using Nodemailer
- ☁️ Deployed on Render.com (free cloud hosting)

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript, EJS Templates
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: Passport.js (local strategy)
- **Architecture**: MVC (Model-View-Controller)
- **APIs**:
  - OpenAI (Chatbot)
  - Google Translate
- **Payment Gateway**: Razorpay (or relevant gateway used)
- **Email**: Nodemailer
- **Deployment**: Render.com

---

## 📂 Folder Structure (MVC)


---

## ⚙️ Getting Started (Local Setup)

### Prerequisites
- Node.js & npm installed
- MongoDB (local or cloud)

### Installation

```bash
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
npm install

MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_session_secret
OPENAI_API_KEY=your_openai_api_key
GOOGLE_API_KEY=your_google_translate_key
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

npm start



