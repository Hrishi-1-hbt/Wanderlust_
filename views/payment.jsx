<% layout("/layouts/boilerplate") %>

<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    font-weight: 700;
  }

  .payment-container {
    max-width: 420px;
    background: #fff;
    margin: 80px auto;
    padding: 40px 30px;
    border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    text-align: center;
  }

  .payment-container p {
    font-size: 1.05rem;
    margin: 16px 0;
    color: #444;
  }

  #payment-form {
    margin-top: 25px;
  }

  #rzp-button {
    background-color: #ff5031;
    color: white;
    font-size: 1.15rem;
    font-weight: 600;
    border: none;
    padding: 14px 30px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  #rzp-button:hover {
    background-color: #e24320;
  }

  /* Responsive */
  @media (max-width: 480px) {
    .payment-container {
      margin: 30px 16px;
      padding: 25px 18px;
    }

    h1 {
      font-size: 1.4rem;
    }

    .payment-container p {
      font-size: 1rem;
    }

    #rzp-button {
      font-size: 1rem;
      padding: 12px 20px;
    }
  }
</style>

<div class="payment-container">
  <h1>Complete Payment</h1>
  <p>Booking for: <%= booking.bookingDate.toDateString() %></p>
  <p>Total Amount: ₹<%= totalPrice %></p>

  <form id="payment-form">
    <button id="rzp-button">Pay</button>
  </form>
</div>

<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
  const options = {
    key: "<%= razorpayKeyId %>",
    amount: <%= razorpayOrder.amount %>, // amount in paise
    currency: "<%= razorpayOrder.currency %>",
    name: "Your Company Name",
    description: "Booking Payment",
    order_id: "<%= razorpayOrder.id %>",
    handler: function (response) {
      fetch('/bookings/payment/confirm/<%= booking._id %>', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          window.location.href = '/paymentStatus?status=success';
        } else {
          window.location.href = '/paymentStatus?status=failure';
        }
      })
      .catch(() => {
        alert('Payment confirmation failed. Please contact support.');
      });
    },
    prefill: {
      // Optionally add user info here
    },
    theme: {
      color: "#ff5031"
    }
  };

  const rzp = new Razorpay(options);
  document.getElementById('rzp-button').onclick = function(e) {
    e.preventDefault();
    rzp.open();
  }
</script>
