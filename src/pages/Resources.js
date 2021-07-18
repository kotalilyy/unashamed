import React from "react";
import Resources from "./Resources";

var NewComponent = React.createClass({
  render: function () {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="../components/main.css" />
        <title>Unashamed</title>
        {/* begin nav bar with logo links and login option*/}
        <nav className="nav-wrapper indigo">
          <div className="container">
            <a href="#" className="brand-logo">
              <img src="./images/handshake.png" width="41px" height="41px" />
              Unashamed
            </a>
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./resources.html">Resources</a>
              </li>
              <li>
                <a href="./login.html">Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        {/* end nav*/}
        {/* begin dark mode feature */}
        <div>
          <input type="checkbox" className="checkbox" id="chk" />
          <label className="label" htmlFor="chk">
            <i className="fas fa-moon" />
            <i className="fas fa-sun" />
            <div className="ball" />
          </label>
        </div>
        {/* end dark mode feature */}
        {/* begin card with resource numbers*/}
        <div className="row">
          <div className="col s12 m5">
            <div className="card-panel deep-purple lighten-4">
              <span className="black-text">
                Here is a list of Crisis hotline numbers that we have compiled
                for you! National Suicide Prevention Lifeline Call
                1-800-273-TALK (8255); En español 1-888-628-9454 Veterans Crisis
                Line Call 1-800-273-TALK (8255) and press 1 or text to 838255
                Crisis Text Line Text “HELLO” to 741741 Text HOME to 741741 to
                connect with a Crisis Counselor SAMHSA National Helpline
                1-800-662-HELP (4357) Childhelp National Child Abuse Hotline
                1-800-4-A-Child or 1-800-422-4453 SAMHSA Disaster Distress
                Helpline 1-800-985-5990 or Text "TalkWithUs" to 66746 National
                Eating Disorders Association (NEDA) Helpline 1-800-931-2237 LGBT
                National Hotline 1-888-843-4564
              </span>
            </div>
          </div>
        </div>
        {/* end card with resource numbers*/}
        {/* begin footer */}
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
  },
});
 export default Resources;