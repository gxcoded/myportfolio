import React from "react";
import Resume from "../assets/images/Resume.pdf";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-sub">Want to ask something?</div>
        <div className="footer-title">Feel free to reach out</div>
        <hr />
      </div>
      <div className="footer-bottom ">
        <div className="footer-links">
          <a href={Resume} download={Resume}>
            Download CV <hr className="hr" />
          </a>
          <a href="https://m.me/hotreload">
            Messenger <hr className="hr" />
          </a>
          <a href="mailto:gcodedecrypt@gmail.com">
            Email <hr className="hr" />
          </a>
          <a href="https://linkedin.com/in/gilx-gucela">
            LinkedIn <hr className="hr" />
          </a>
        </div>
      </div>
      <div className="copyright">&copy; All rights reserved 2023</div>
    </div>
  );
};

export default Footer;
