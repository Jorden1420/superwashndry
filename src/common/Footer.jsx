import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        Copyright &copy; {year} Super Wash n Dry · All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
