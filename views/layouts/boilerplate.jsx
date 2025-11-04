const React = require("react");

function Boilerplate({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/icon.jpg" />
        <title>Wanderlust</title>

        {/* CSS */}
        <link rel="stylesheet" href="/css/preloader.css" />
        <link rel="stylesheet" href="/css/translator.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/light_mode.css" />
        <link rel="stylesheet" href="/css/dark_mode.css" />
        <link rel="stylesheet" href="/css/review.css" />
        <link rel="stylesheet" href="/css/contributor.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v3.5.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <script src="https://api.mapbox.com/mapbox-gl-js/v3.5.1/mapbox-gl.js"></script>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>

      <body className="light-mode">
        <div id="preloader">
          <div className="loader"></div>
          <span className="load"></span>
        </div>

        {/* Navbar + Flash + Page Content */}
        <div className="container">{children}</div>

        <hr className="btw-foot" />

        {/* Footer */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        <script src="/js/script.js"></script>
        <script src="/js/toggler.js"></script>
        <script src="/js/contributor.js"></script>
      </body>
    </html>
  );
}

module.exports = Boilerplate;
