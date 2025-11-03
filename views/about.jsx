<% layout("/layouts/boilerplate") %>

<style>
    body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        transition: background-color 0.3s, color 0.3s;
    }

    body.light-mode {
        background-color: #f9f9f9;
        color: #333;
    }

    body.dark-mode {
        background-color: #121212;
        color: #e0e0e0;
    }

    header {
        padding: 40px 0;
        text-align: center;
        color: #ff385c;
    }

    header h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: bold;
    }

    header.light-mode h1 {
        color: #fe002f;
    }

    header.dark-mode h1 {
        color: #ff6f91;
    }

    main {
        max-width: 90%;
        margin: 20px auto;
        padding: 30px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s, color 0.3s;
    }

    main.light-mode {
        background: #ffffff;
        color: #333;
    }

    main.dark-mode {
        background: #1e1e1e;
        color: #e0e0e0;
    }

    section {
        margin-bottom: 30px;
    }

    h2 {
        color:#ff385c; 
        border-bottom: 2px solid #00CFFF;
        padding-bottom: 10px;
        font-size: 1.8rem;
        position: relative;
    }

    h2::after {
        content: '';
        display: block;
        width: 50px;
        height: 3px;
        background-color: #00cfff;
        margin-top: 5px;
    }

    h2.light-mode {
        color: #fe002f;
    }

    h2.dark-mode {
        color: #ff6f91;
        border-bottom-color: #7fdfff;
    }

    .content-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        flex-direction: column;
    }

    .content-wrapper img {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 12px;
        transition: transform 0.3s ease;
    }

    .content-wrapper img:hover {
        transform: scale(1.05);
    }

    .text-content {
        width: 100%;
        margin-top: 10px;
        text-align: center;
    }

    .intro p,
    .mission p,
    .story p,
    .join-us p {
        font-size: 1.125rem;
    }

    .intro p,
    .mission p,
    .story p,
    .join-us p {
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    .offerings ul,
    .values ul {
        list-style-type: none;
        padding-left: 0;
    }

    .offerings li,
    .values li {
        background-color: #e7f3ff;
        border-left: 5px solid #007bff;
        padding: 10px;
        margin-bottom: 10px;
        position: relative;
        transition: background-color 0.3s ease;
    }

    .offerings li:hover,
    .values li:hover {
        background-color: #d1e7fd;
        box-shadow: inset 2px 2px 5px rgba(255,255,255,0.6), inset -5px -5px -10px rgba(0,0,0,0.1);
    }

    .light-mode .offerings li, .light-mode .values li {
        background-color: #e7f3ff;
        border-color: #007bff;
    }

    .dark-mode .offerings li, .dark-mode .values li {
        background-color: #2b2b2b;
        border-color: #66ccff;
        color: #c0c0c0;
    }

    .dark-mode main{
        background-color: #333;
    }

    @media (min-width: 768px) {
        .content-wrapper {
            flex-direction: row;
            align-items: flex-start;
        }

        .content-wrapper img,
        .text-content {
            width: 50%;
        }

        .text-content {
            padding-left: 20px;
            padding-right: 20px;
            text-align: justify;
        }
    }
</style>

<header>
    <h1>About Us</h1>
</header>

<main>
    <section class="intro">
        <div class="content-wrapper" style="text-align: justify;">
            <img src="https://media.istockphoto.com/id/509553708/photo/tropical-modern-villa-exterior.jpg?s=612x612&w=0&k=20&c=rMmOmihiXHl6htuhYVzbfPdKAawYHFuNMhD32A0sWUg=" alt="Travel Experience">
            <div class="text-content">
                <p style="max-width: 37rem; margin-left: 2rem">Welcome to <strong style="color: rgb(255, 68, 0);">Wanderlust</strong>, Discover Your Perfect Local Stay with Wanderlust
                    At Wanderlust, we make it easy to find and book authentic local stayhomes that turn your travels into unforgettable experiences. Our platform connects you with trusted local hosts, offering a wide variety of unique accommodations that suit every style and budget. Whether you're looking for a cozy homestay, a charming guesthouse, or a modern city apartment, Wanderlust helps you feel at home wherever you go.
                    
                    </p>
            </div>
        </div>
    </section>

    <section class="mission">
        <h2>Our Mission</h2>
        <div class="content-wrapper" style="text-align: justify;">
            <div class="text-content">
                <p style="max-width: 37rem; margin-right: 2rem">At <strong style="color: rgb(255, 0, 0);">Wanderlust</strong> Connecting Travelers with Local Stays
                    At Wanderlust, our mission is to redefine travel by offering a peer-to-peer platform where guests can discover authentic local stayhomes, and hosts can open their doors to the world. We’re all about building meaningful connections—bringing communities closer and celebrating local cultures through personal, memorable stays. Whether you're traveling near or far, Wanderlust helps you experience each destination like a local.</p>
            </div>
            <img src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg" alt="Our Mission Image" style="margin-top: 2.5rem;">
        </div>
    </section>

    <section class="values">
        <h2>Our Values</h2>
        <ul>
            <li>
              <strong>Trust:</strong> We’re dedicated to providing a secure and reliable experience for both guests and hosts. Every listing undergoes verification, and our review system ensures quality and accountability across the platform.
            </li>
            <li>
              <strong>Transparency:</strong> Clear communication is at the heart of Wanderlust. From pricing to policies, we make sure all details are upfront—so you can book with confidence.
            </li>
            <li>
              <strong>Sustainability:</strong> We believe in travel that respects the planet. That’s why we promote eco-friendly stays and encourage our community to minimize their environmental footprint.
            </li>
          </ul>
          
    </section>

    <section class="offerings">
        <h2>What We Offer</h2>
        <ul>
            <li>
              <strong>Local Variety:</strong> Whether it’s a charming village homestay, a beachside hut, or a peaceful countryside retreat, our platform offers a wide selection of local stayhomes that reflect the true spirit of each destination.
            </li>
            <li>
              <strong>Simple & Seamless:</strong> Finding the perfect local stay is easy with our user-friendly platform. Search, book, and connect with hosts in just a few clicks.
            </li>
            <li>
              <strong>Locally Rooted Community:</strong> We’re more than just a booking site—we’re a community. Our hosts share insider tips and hidden local gems, helping travelers explore each place like a true local.
            </li>
          </ul>
          
    </section>

    <section class="join-us">
        <h2>Join Us</h2>
        <p>
          Whether you're searching for an authentic local stay or looking to open your home to travelers, 
          <strong style="color: rgb(255, 68, 0);">Wanderlust</strong> connects you with a community that values meaningful, locally rooted travel experiences. 
          Discover hidden gems, support neighborhood hosts, and be part of something more personal than a typical getaway.
        </p>
        <p>
          Have questions or feedback? Reach out anytime through our <a href="/contact">Contact Us</a> page we’re here to help!
        </p>
        <p style="text-align: center; margin-top: 3rem; font-size: larger;">
          Thank you for choosing 
          <strong style="color: rgb(255, 68, 0);">Wanderlust</strong>—where every stay feels like home, and every host has a local story to share.
        </p>
      </section>
      
</main>
