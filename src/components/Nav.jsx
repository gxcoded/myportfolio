import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../assets/images/Cv.pdf";

import {
  faLinkedinIn,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href={Resume} download={Resume}>
            <FontAwesomeIcon className="icon" icon={faFileArrowDown} />
            Download CV
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/gilx-gucela">
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
            LinkedIn
          </a>
        </li>
        <li>
          {" "}
          <a href="mailto:gcodedecrypt@gmail.com">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            Email
          </a>
        </li>
        <li>
          <a href="https://m.me/hotreload">
            {" "}
            <FontAwesomeIcon className="icon" icon={faFacebookMessenger} />
            Messenger
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
