import React from "react";

var Login = function () {
  return (
    <div>
      <link rel="stylesheet" href="../components/main.css" />
      <title>Unashamed</title>
      <nav className="nav-wrapper indigo">
        <div className="container">
          <a href="/" className="brand-logo">
            <img src="./images/handshake.png" width="41px" height="41px" />
            Unashamed
          </a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./resources">Resources</a>
            </li>
            <li>
              <a href="./login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Login will go here</h1>
     
   
      <footer className="page-footer indigo">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">
                When it comes to your mental health
              </h5>
              <h5></h5>
              <h5>Never be afraid</h5>
              <h5>Remain Unashamed</h5>
              <p className="grey-text text-lighten-4" />
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.helpguide.org/"
                    target="_blank"
                  >
                    Help Guide
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.betterhelp.com/"
                    target="_blank"
                  >
                    Find Counseling
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://suicidepreventionlifeline.org/"
                    target="_blank"
                  >
                    Suicide Prevention Lifeline
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.cdc.gov/injury/features/stop-bullying/index.html"
                    target="_blank"
                  >
                    #StopBullying
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.stopvaw.org/"
                    target="_blank"
                  >
                    Stop Violence Against Women
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.tethr.men/"
                    target="_blank"
                  >
                    Support Community for Men
                  </a>
                </li>
                <lil>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.thehotline.org/"
                    target="_blank"
                  >
                    Domestic Abuse Support{" "}
                  </a>
                </lil>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2021 Copyright
            <a className="grey-text text-lighten-4 right" href="#!" />
          </div>
        </div>
      </footer>
      {/*end footer */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
    </div>
  );
};

export default Login;
