import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-title title">Most Recent Projects</div>
      <div className="projects-contents">
        <div className="content proj-con">
          <div className="content-title">
            <FontAwesomeIcon className="circle-dot" icon={faCircle} />
            <span> Software Bill of Materials and Vulnerability</span>
          </div>
          <div className="content-position">Software Engineer Intern</div>
          <div className="content-duration">March - June 2023</div>
          <div className="content-description">
            During my internship, I had the opportunity to work on a company
            project alongside the exceptionally skilled Software Engineers at
            Hooli Software. This collaborative experience proved to be a
            valuable learning journey, particularly in enhancing my knowledge of
            the Go Programming language.
          </div>
        </div>
        <div className="content proj-con">
          <div className="content-title">
            <FontAwesomeIcon className="circle-dot" icon={faCircle} />
            Qr-Code Based Contact Tracing with Attendance Monitoring System
          </div>
          <div className="content-position">Lead Programmer</div>
          <div className="content-duration">June 2022 - Feb 2023</div>
          <div className="content-description">
            A web application to track close contacts of students and staff of
            Pangasinan State University. This web application is developed using
            the M.E.R.N Stack.
          </div>
        </div>
        <div className="content proj-con">
          <div className="content-title">
            <FontAwesomeIcon className="circle-dot" icon={faCircle} />
            Supplies Management System with Predictive Analysis
          </div>
          <div className="content-position">Lead Programmer</div>
          <div className="content-duration">Dec 2022 - Feb 2023</div>
          <div className="content-description">
            A web application to manage supplies requests, and stocks for
            Pangasinan State University. This Web Application is developed using
            HTML5, CSS3, JAVASCRIPT and PHP.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
