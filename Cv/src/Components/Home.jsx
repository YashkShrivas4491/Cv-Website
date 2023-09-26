import code from '../assets/code.png';
import './Hom.css';
// import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium, faGithub, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Contact from './Contact';



const Home = () => {
  


  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  const onHandleClick = () => {
         window.location.href =
           "https://drive.google.com/file/d/1hMOlwIZXtSv38B_UNXi2IVykyrKoEP7C/view?usp=drive_link";
  }
  const githubUrl = "https://github.com/YashkShrivas4491";
  const linkedInUrl = "https://www.linkedin.com/in/yash-kumar-shrivas-98a759126/";
  const twitterUrl = "https://twitter.com/YashKumarS4491";
  const mediumUrl = "https://medium.com/@yashkshrivas1234"; 

  return (
    <div className="container">
      <div className="left">
        <h2
          style={{
            paddingTop: "3rem",
            margin: "auto 0",
            fontWeight: "normal",
            color: "white",
          }}
        >
          Life is simple{" "}
          <span style={{ color: "orange", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Eat", "Sleep", "Code", "Repeat!"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
            />
          </span>
        </h2>
        <p className='des'>
          Im a dedicated software developer with a passion for creating
          cutting-edge applications. My expertise lies in transforming ideas
          into practical solutions, always striving for clean code and
          exceptional user experiences. Lets collaborate to bring your software
          vision to life.
        </p>
        <p className='stack'>Tech Stack : C++ 💖, Git , HTML5 , CSS3 , JS 👨‍💻 , React ❄️ , MySQL , OOPS , OpenSource⚡</p>
        <button className="btn" onClick={onHandleClick}>
          Resume
        </button>

        <div className="icn">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <FontAwesomeIcon style={{ color: "white" }} icon={faGithub} />
          </a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            <FontAwesomeIcon style={{ color: "white" }} icon={faLinkedinIn} />
          </a>
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            <FontAwesomeIcon style={{ color: "white" }} icon={faTwitter} />
          </a>
          <a href={mediumUrl} target="_blank" rel="noreferrer">
            <FontAwesomeIcon style={{ color: "white" }} icon={faMedium} />
          </a>
        </div>
      </div>

      <div className="right">
        <img src={code} alt="img" />
      </div>
      <Contact />
    </div>
  );
}

export default Home