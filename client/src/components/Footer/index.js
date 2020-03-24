import React from "react";
import "./index.css";
import logo from "../../logo.png";

function Footer() {
  return (
    <React.Fragment>
      <p className="separator"></p>
      <footer className="footer">
        <p>
          Firuza Abramyan - Taylor Zettel - Carlos De Castro{" "}
          <img src={logo} alt="logo" />
        </p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;

