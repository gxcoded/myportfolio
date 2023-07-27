import "./App.css";
import "./assets/css/responsive.css"
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";

const App = () => {
  const isDark = ()=>{
    if(localStorage.getItem('lightMode') === null){
      return true
    }
    return false
  }

  const [loading,setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(isDark());

  const toggleTheme = () => {
    if (darkMode){
      localStorage.setItem('lightMode', true);
    }else{
      localStorage.removeItem('lightMode');
    }
    setDarkMode(!darkMode)
  };

  useEffect(() => {
    disableEvents();
    setTimeout(()=>{
      setLoading(false)
    },1500)
    setTimeout(()=>{
      animation();
    },1550)
  }, []);

  const animation = () => {
    const titles = document.querySelectorAll(".title");
    setObserver(titles, "show-title");
    const images = document.querySelectorAll(".section-image");
    setObserver(images, "animate-image");
    const texts = document.querySelectorAll(".bg-text");
    setObserver(texts, "animate-text");
    const main = document.querySelectorAll(".main-image");
    setObserver(main, "animate-main-image");
    const captions = document.querySelectorAll(".main-caption");
    setObserver(captions, "animate-main-caption");
    const projects = document.querySelectorAll(".proj-con");
    setObserver(projects, "animate-proj-con");
    const footer = document.querySelectorAll(".footer-title");
    setObserver(footer, "animate-footer-title");
  };

  const setObserver = (elements, key) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(key);
        } else {
          entry.target.classList.remove(key);
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  const disableEvents = () => {
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });

    document.addEventListener("keyup", (e) => {
      if (e.keyCode !== 122) e.preventDefault();
    });

    document.addEventListener("keydown", (e) => {
      if (e.keyCode !== 122) e.preventDefault();
    });

    document.addEventListener("keypress", (e) => {
      if (e.keyCode !== 122) e.preventDefault();
    });
  };

 

  return (
    <div>
      {
        loading ? 
        <Welcome darkMode={darkMode}/> :
        <Main darkMode={darkMode} toggleTheme={toggleTheme} /> 
      }
    </div>
  );
};

export default App;
