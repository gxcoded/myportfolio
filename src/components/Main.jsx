import MainContent from "./MainContent";
import Nav from "./Nav";
import TopNav from "./TopNav";
import BackgroundText from "./BackgroundText";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";


const Main = ({darkMode, toggleTheme}) => {
  return (
    <section className={`main-section ${darkMode && "dark"}`}>
      {darkMode}
      <BackgroundText
        classProp={"start"}
        text="Full Stack Software Developer"
      />
      <BackgroundText classProp={"end"} text={`Software Developer`} />
      <div className="container main-container">
        <TopNav darkMode={darkMode} toggleTheme={toggleTheme} />
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
