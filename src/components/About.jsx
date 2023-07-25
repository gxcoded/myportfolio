import Me from "../assets/images/me2.png";
import Cert from "../assets/images/certnew.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="title">About Me</div>
      <div className="about-content">
        <div className="about-section">
          <div className="about-section-left">
            <div className="section-content">
              <div className="about-section-title">Education</div>
              <p className="about-caption">
                " Empowering the Future through Education: I hold a
                <span> Bachelor of Science</span> degree in
                <span> Information Technology </span>
                from
                <span> Pangasinan State University. "</span>
              </p>
            </div>
          </div>
          <div className="about-section-right educ-right">
            <img src={Me} alt="grad" className="section-image" />
          </div>
        </div>
        <div className="about-section">
          <div className="about-section-left">
            <img src={Cert} alt="grad" className="section-image cert-image" />
          </div>
          <div className="about-section-right intern-right">
            <div className="section-content">
              <div className="about-section-title">Internship</div>
              <p className="about-caption">
                "Building Practical Experience: I completed my internship as a
                <span> Software Engineer</span> at{" "}
                <span>Hooli Software Development Services.</span>"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
