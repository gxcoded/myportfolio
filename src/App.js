import "./App.css";
import Main from "./components/Main";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    disableEvents();
    animation();
  }, []);

  const animation = () => {
    const titles = document.querySelectorAll(".title");
    setObserver(titles, "show-title");
    const images = document.querySelectorAll(".section-image");
    setObserver(images, "animate-image");
    const texts = document.querySelectorAll(".bg-text");
    setObserver(texts, "animate-text");
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
      <Main />
    </div>
  );
};

export default App;
