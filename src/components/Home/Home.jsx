import React, { useRef } from "react";

import Header, { PHONE_DISPLAY, PHONE_HREF } from "../../common/Header";
import Footer from "../../common/Footer";
import Gallery from "../Gallery/Gallery";

const reasons = [
  {
    title: "Incredible prices",
    text: "Competitive rates that let you run more loads without stretching your budget.",
  },
  {
    title: "Open when you need us",
    text: "Flexible hours seven days a week — check our schedule below and stop by anytime.",
  },
  {
    title: "Excellent quality",
    text: "Clean machines and plenty of wash and dry options for the freshest finish.",
  },
];

const Home = () => {
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="app">
      <Header galleryRef={galleryRef} contactRef={contactRef} />

      <main>
        <section className="section reasons">
          <div className="section__intro">
            <h2>Why Super Wash n Dry?</h2>
            <p>Local laundry done right — simple, clean, and affordable.</p>
          </div>
          <ul className="reasons__list">
            {reasons.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <Gallery ref={galleryRef} />

        <section className="section facility">
          <div className="facility__copy">
            <h2>New facility</h2>
            <p>
              Super Wash N Dry is under new management and committed to meeting
              the highest standards for clean clothes. We clean our machines
              regularly so every visit feels fresh.
            </p>
          </div>
          <div className="facility__visual">
            <img
              src="/images/Soap-Monochromatic.svg"
              alt=""
              width="280"
              height="280"
            />
          </div>
        </section>

        <section className="section contact" ref={contactRef} id="contact">
          <div className="section__intro">
            <h2>Contact us</h2>
            <p>Questions, directions, or ready to wash — we&apos;re here.</p>
          </div>

          <div className="contact__panel">
            <div className="contact__info">
              <h3>Contact information</h3>
              <a href={PHONE_HREF} className="contact__link">
                <span>Phone</span>
                {PHONE_DISPLAY}
              </a>
              <a
                href="https://www.google.com/maps/place/Super+Wash+n+Dry/@38.6091135,-121.4543434,17z/data=!3m2!4b1!5s0x809ad75a32d12153:0x676687962f893b99!4m5!3m4!1s0x809ad7ad236145d5:0x26da0d4c65efe610!8m2!3d38.6092226!4d-121.4521535"
                className="contact__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Address</span>
                2030 Del Paso Blvd, Sacramento, CA 95815
              </a>

              <h3>Business hours</h3>
              <p className="contact__hours">
                Open every day, 7AM – 10PM
                <br />
                Last wash at 8:30PM
              </p>

              <h3>Find us online</h3>
              <div className="contact__social">
                <a
                  href="https://www.google.com/maps/place/Super+Wash+n+Dry/@38.6091135,-121.4543434,17z/data=!3m2!4b1!5s0x809ad75a32d12153:0x676687962f893b99!4m5!3m4!1s0x809ad7ad236145d5:0x26da0d4c65efe610!8m2!3d38.6092226!4d-121.4521535"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps
                </a>
                <a
                  href="https://www.yelp.com/biz/super-wash-n-dry-sacramento"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yelp
                </a>
                <a
                  href="https://www.facebook.com/superwashndrydelpaso"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div className="contact__map">
              <img
                src="/images/swd-map.jpg"
                alt="Map showing Super Wash n Dry on Del Paso Blvd"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
