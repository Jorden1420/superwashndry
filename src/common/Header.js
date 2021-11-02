import React from "react";

import { Button, Image } from "react-bootstrap";

const Header = () => {
  return (
    <header
      className="app-header"
      style={{
        backgroundImage: `url("/images/superwashndrycover.jpg")`,
      }}
    >
      <div className="container">
        <nav className="navigation-bar">
          <div className="logo">
            <a className="App-link" href="/">
              <img
                src="images/swd-logo.png"
                width="250"
                alt="Super Wash n Dry Logo"
              />
            </a>
          </div>
          <div className="socialMedia">
            <a
              href="https://www.google.com/maps/place/Super+Wash+n+Dry/@38.6091135,-121.4543434,17z/data=!3m2!4b1!5s0x809ad75a32d12153:0x676687962f893b99!4m5!3m4!1s0x809ad7ad236145d5:0x26da0d4c65efe610!8m2!3d38.6092226!4d-121.4521535"
              target="_blank"
              rel="noopener noreferrer"
              title="Super Wash n Dry Google Directions"
            >
              <i className="fab fa-google fa-3x"></i>
            </a>
            <a
              href="https://www.facebook.com/superwashndrydelpaso"
              target="_blank"
              rel="noopener noreferrer"
              title="Super Wash n Dry Facebook Page"
            >
              <i className="fab fa-facebook fa-3x"></i>
            </a>
          </div>
        </nav>

        <div className="sub-header">
          <div className="call-to-action-container">
            <div className="call-to-action">
              <h1 className="text-white" style={{ fontSize: "50px" }}>
                Let us super wash n dry
              </h1>
              <h2 className="text-white pb-2">Your Clothes</h2>
              <a href="tel:9164184902">
                <Button
                  variant="dark"
                  size="lg"
                  style={{ borderRadius: "30px" }}
                >
                  Get in Contact
                </Button>
              </a>
            </div>
            <div className="call-to-action-image">
              <Image src="/images/cover-photo.jpg" rounded />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
