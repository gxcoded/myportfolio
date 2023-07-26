import Me from "../assets/images/sample.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MainContent = () => {
  return (
    <div className="main-content main-profile ">
      <div className="main-profile left">
        <img className="main-image" src={Me} alt="me" />
      </div>
      <div className="main-profile right main-caption">
        <h1>Gilbert Gucela</h1>
        <h2>Software Developer</h2>
        <p>
          I am a passionate and driven graduate of{" "}
          <span>BS Information Technology</span>, with a strong focus on{" "}
          <span>web and mobile technologies</span>. My ultimate goal is to excel
          as a <span>Software Engineer</span> and contribute significantly to
          the ever-evolving <span>tech industry</span>.
        </p>
        <a href="">
          <FontAwesomeIcon className="icon" icon={faGithub} />
          github.com/gxcarbo
        </a>
      </div>
    </div>
  );
};

export default MainContent;
