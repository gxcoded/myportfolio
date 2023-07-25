import jsonData from "../data/data.json";
import catData from "../data/categories.json";

import { useState, useEffect } from "react";

const Skills = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setData(jsonData);
    setCategories(catData);
  }, []);

  return (
    <div className="skills-container">
      <div className="title">Technical Skills</div>
      {categories.map((category) => (
        <div className="skills-content " key={category.id}>
          <div className="skills-content-title">{category.description}</div>
          <div className="tech-images">
            {data.map(
              (d) =>
                d.category === category.id && (
                  <div className="tech-image-wrapper" key={d.source}>
                    <img src={d.source} alt={d.description} />
                  </div>
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
