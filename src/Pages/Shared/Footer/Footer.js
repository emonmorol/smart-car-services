import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-content text-center">
      <p>
        <small>
          copyright reserved <FontAwesomeIcon icon={faCopyright} />{" "}
          {new Date().getFullYear()}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
