import React, { useEffect, useState } from "react";

const PHONE_DISPLAY = "(916) 222-2222";
const PHONE_HREF = "tel:+19162222222";

const Header = ({ galleryRef, contactRef }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="hero">
      <div
        className="hero__media"
        style={{ backgroundImage: 'url("/images/superwashndrycover.jpg")' }}
        role="img"
        aria-label="Interior of Super Wash n Dry laundromat"
      />
      <div className="hero__veil" />

      <nav className={`site-nav${scrolled ? " site-nav--solid" : ""}`}>
        <a className="site-nav__brand" href="/">
          <img
            src="/images/swd-logo.png"
            width="160"
            height="auto"
            alt="Super Wash n Dry"
          />
        </a>
        <ul className="site-nav__links">
          <li>
            <button type="button" onClick={() => scrollTo(galleryRef)}>
              Gallery
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo(contactRef)}>
              Contact
            </button>
          </li>
          <li>
            <a className="site-nav__phone" href={PHONE_HREF}>
              {PHONE_DISPLAY}
            </a>
          </li>
        </ul>
      </nav>

      <div className="hero__content">
        <p className="hero__brand reveal reveal--1">Super Wash n Dry</p>
        <h1 className="hero__headline reveal reveal--2">
          Fresh clothes,
          <br />
          every load
        </h1>
        <p className="hero__lede reveal reveal--3">
          Sacramento&apos;s neighborhood laundromat on Del Paso Blvd — open
          daily with machines cleaned for your next wash.
        </p>
        <div className="hero__actions reveal reveal--4">
          <a className="btn btn--primary" href={PHONE_HREF}>
            Call {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => scrollTo(contactRef)}
          >
            Find us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
export { PHONE_DISPLAY, PHONE_HREF };
