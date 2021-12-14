import React, { useState } from "react";

import Header from "./common/Header";
import Footer from "./common/Footer";

import Gallery from "./components/Gallery";

import { Image, Card } from "react-bootstrap";

const App = () => {
  const [scrollDiv, setScrollDiv] = useState();
  const [scrollChildDiv, setScrollChildDiv] = useState();

  const galleryData = (data) => {
    setScrollChildDiv(data);
    // console.log("data...", data);
  };

  return (
    <div className="App">
      <div className="home-container">
        <div className="container-fluid">
          <Header node={scrollDiv} childNodes={scrollChildDiv} />
          <div className="container">
            <div className="super-wash-info">
              <h1 className="text-center py-4" id="unique">
                Why Super Wash n Dry?
              </h1>
              <div className="super-watch-content">
                <div className="row">
                  <div className="col-lg-4">
                    <Card>
                      <div className="icon-info text-center mt-5">
                        <i
                          className="fas fa-money-bill-wave fa-4x"
                          style={{ color: "#36567E" }}
                        ></i>
                      </div>
                      <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>
                          <h3 style={{ fontWeight: "bold" }}>
                            Incredible Prices
                          </h3>
                        </Card.Title>
                        <Card.Text>
                          Super Wash n Dry provides excellent prices that allows
                          you to do more loads as well as blows away other
                          laundromat competitors.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4">
                    <Card>
                      <div className="icon-info text-center mt-5">
                        <i
                          className="fas fa-walking fa-4x"
                          style={{ color: "#36567E" }}
                        ></i>
                      </div>
                      <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>
                          <h3 style={{ fontWeight: "bold" }}>
                            Simple &amp; Easy Convenience
                          </h3>
                        </Card.Title>
                        <Card.Text>
                          Our hours are flexible to meet customers needs for
                          cleaning clothes. In addition, Available times are on
                          our website below to see when we are open for
                          operating hours.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4">
                    <Card>
                      <div className="icon-info text-center mt-5">
                        <i
                          className="fas fa-air-freshener fa-4x"
                          style={{ color: "#36567E" }}
                        ></i>
                      </div>
                      <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>
                          <h3 style={{ fontWeight: "bold" }}>
                            Excellent Quality
                          </h3>
                        </Card.Title>
                        <Card.Text>
                          Our machines are always cleaned and have a vast amount
                          of selection options on how customers would like there
                          clothes cleaned and dryed to provide the highest
                          quality of cleasiness.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
              {/* Gallery Component */}
              <Gallery node={scrollDiv} galleryNode={galleryData} />
              <div className="clean-container">
                <h1 className="text-center py-4" id="unique">
                  New Facility!
                </h1>
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-md-12 order-2 text-center">
                    <p className="pt-4">
                      Super Wash N Dry is now under new management and will be
                      taking the appropriate measures to make sure that our
                      building is meeting customers highest standards and
                      quality for clean clothes! We clean our machine regularly
                      to meet Covid-19 Federal Guidelines.
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-12 text-center order-1">
                    <Image
                      src="/images/Soap-Monochromatic.svg"
                      rounded
                      style={{ border: "3px solid #36567E" }}
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="contact-container">
                <h1 className="text-center py-4" id="unique">
                  Contact us
                </h1>
                <div className="contact" ref={(node) => setScrollDiv(node)}>
                  <div className="row">
                    <div
                      className="col-lg-5 p-4 align-items-center"
                      style={{ backgroundColor: "#5899e8" }}
                    >
                      <h3
                        className="contact-info text-white"
                        style={{ fontWeight: "bold" }}
                      >
                        Contact Information
                      </h3>
                      <a
                        href="tel:9164184434"
                        className="phone text-white d-block pt-3"
                      >
                        <strong>Phone:</strong> (916) 418-4434
                      </a>
                      <a
                        href="https://www.google.com/maps/place/Super+Wash+n+Dry/@38.6091135,-121.4543434,17z/data=!3m2!4b1!5s0x809ad75a32d12153:0x676687962f893b99!4m5!3m4!1s0x809ad7ad236145d5:0x26da0d4c65efe610!8m2!3d38.6092226!4d-121.4521535"
                        className="address text-white d-block pt-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Address:</strong> 2030 Del Paso Blvd,
                        Sacramento, CA 95815
                      </a>
                      <h3
                        className="contact-info py-3 text-white"
                        style={{ fontWeight: "bold" }}
                      >
                        Business Hours
                      </h3>
                      <p className="text-white">
                        <strong>Monday-Friday 7AM - 10PM</strong>
                      </p>
                      <p className="text-white">
                        <strong>Last Wash @ 8:30PM</strong>
                      </p>
                      <h3
                        className="contact-info pt-3 text-white"
                        style={{ fontWeight: "bold" }}
                      >
                        Social Media
                      </h3>
                      <div className="contact-social-media">
                        <a
                          href="https://www.google.com/maps/place/Super+Wash+n+Dry/@38.6091135,-121.4543434,17z/data=!3m2!4b1!5s0x809ad75a32d12153:0x676687962f893b99!4m5!3m4!1s0x809ad7ad236145d5:0x26da0d4c65efe610!8m2!3d38.6092226!4d-121.4521535"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Super Wash n Dry Google Directions"
                          className="d-inline-block p-3"
                        >
                          <i className="fab fa-google fa-3x"></i>
                        </a>
                        <a
                          href="https://www.yelp.com/biz/super-wash-n-dry-sacramento"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Super Wash n Dry Yelp"
                          className="d-inline-block p-3"
                        >
                          <i className="fab fa-yelp fa-3x"></i>
                        </a>
                        <a
                          href="https://www.facebook.com/superwashndrydelpaso"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Super Wash n Dry Facebook Page"
                          className="d-inline-block p-3"
                        >
                          <i className="fab fa-facebook fa-3x"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="map">
                        <Image
                          src="/images/swd-map.jpg"
                          className="w-100"
                          style={{ border: "3px solid #36567E" }}
                          rounded
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
