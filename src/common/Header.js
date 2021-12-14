import React from "react";

import { Button, Image } from "react-bootstrap";

const Header = (props) => {
  const scrollToNode = () => {
    const node = props.node;
    node.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToChildNode = () => {
    const childNode = props.childNodes;
    // console.log("the node is...", node);
    childNode.scrollIntoView({ behavior: "smooth" });
  };

  // console.log("props are...", props);
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
          <div className="menu-items">
            <ul>
              <li onClick={() => scrollToChildNode()}>Gallery</li>
              <li onClick={() => scrollToNode()}>Contact Us</li>
            </ul>
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
