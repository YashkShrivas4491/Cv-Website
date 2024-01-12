import code1 from '../assets/code1.png';
import './Hom.css';
// import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium, faGithub, faTwitter, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import Contact from './Contact';
import Label from './Label';

import {
  useWindowSize
} from "@react-hook/window-size";
import Confetti from "react-confetti";
import { MdOutlineWork } from "react-icons/md";
import Skills from './Skills';



const Home = () => {
  
    const { width, height } = useWindowSize();
  const labels = [
 
  //  { name: "Bug", color: "e11d21" },
  //  { name: "Feature", color: "84b6eb" },
   { name: "Still Experimenting", color: "84b6eb" },
   // Add more labels as needed
 ];

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  const onHandleClick = () => {
         window.location.href =
           "https://drive.google.com/file/d/1za6k8lkOpGcCq7TYoZxo54YgRT9cZgdQ/view?usp=sharing";
  }
  const githubUrl = "https://github.com/YashkShrivas4491";
  const linkedInUrl = "https://www.linkedin.com/in/yash-kumar-shrivas-98a759126/";
  const twitterUrl = "https://twitter.com/YashKumarS4491";
  const mediumUrl = "https://medium.com/@yashkshrivas1234"; 

  return (
    <>
      <div className="container">
        <Confetti width={width} height={height} recycle={false} />
        <div className="left">
          <h4
            style={{
              paddingTop: "3rem",
              margin: "auto 0",
              fontWeight: "normal",
              color: "white",
            }}
          >
            Life is all about{" "}
            <span style={{ color: "orange", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Eat 🚀",
                  "Hustle ⚡",
                  "Code 👨‍💻",
                  "Sleep 🥳",
                  "Repeat!🔗",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
              />
            </span>
          </h4>

          <h1>Frontend Developer</h1>

          <div className="labelDiv">
            {labels.map((label, index) => (
              <Label key={index} name={label.name} color={label.color} />
            ))}
          </div>
          {/* <div className="tech">
            <h4>
              Tech Stack : C++ 💖, Git , HTML5 , CSS3 , JS 👨‍💻 , React ❄️ , MySQL
              , OOPS , OpenSource⚡
            </h4>
          </div> */}

          <button
            className="btn"
            onClick={onHandleClick}
            style={{
              fontFamily: "Martian Mono",
            }}
          >
            <MdOutlineWork /> Hire Me
          </button>

          <div className="icn">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon style={{ color: "white" }} icon={faGithub} />
            </a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon style={{ color: "blue" }} icon={faLinkedinIn} />
            </a>
            <a href={twitterUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon style={{ color: "#75BFEC" }} icon={faTwitter} />
            </a>
            <a href={mediumUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faMedium} />
            </a>
          </div>
        </div>

        <div className="right">
          <img src={code1} alt="img" />
        </div>
      </div>
      <Skills />
      <Contact />
    </>
  );
}

export default Home