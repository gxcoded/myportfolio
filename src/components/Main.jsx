import MainContent from "./MainContent";
import Nav from "./Nav";
import TopNav from "./TopNav";
import BackgroundText from "./BackgroundText";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import { useState } from "react";

const Main = () => {
  const [dark, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!dark);
  };

  return (
    <section className={`main-section ${dark && "dark"}`}>
      <BackgroundText
        classProp={"start"}
        text="Full Stack Software Developer"
      />
      <BackgroundText classProp={"end"} text={`Software Developer`} />
      <div className="container main-container">
        <TopNav dark={dark} toggleTheme={toggleTheme} />
        <MainContent />
        <Nav />
        <Projects />
        <About />
        <Footer />
      </div>
    </section>
  );
};

export default Main;
