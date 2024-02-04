import React from "react";
import cpp from "./../assets/cpp.png";
import css1 from "./../assets/css1.png";
import git from "./../assets/git.png";
import html from "./../assets/html.png";
import js from "./../assets/js.png";
import react from "./../assets/react.png";
import firebase from "./../assets/firebase.png";
import sql1 from "./../assets/sql1.png";
import './../Components/Skill.css';


const data = [
  {
    image: cpp,
  },

  {
    image: js,
  },
  {
    image: git,
  },

  {
    image: react,
  },
  {
    image: firebase,
  },
  {
    image: sql1,
  },
  {
    image: html,
  },
  {
    image: css1,
  },
];

const Skills = () => {
  return (
    <div className="box">
      <div className="rt">
        <h1>
          Tech{" "}
          <span
            style={{
              color: "yellow",
            }}
          >
            Stack 💻
          </span>
        </h1>
      </div>
      <div className="skills">
        {data.map((item, index) => (
          <div key={index} className="tech">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
