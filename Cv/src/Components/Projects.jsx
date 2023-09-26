import ProjectList from "./ProjectList";
import Terminal from '../assets/Yash-Shrivas-Terminal.png';
import weather from '../assets/weather.avif';
import visionpro from '../assets/visionpro.jpg';
import githublogo from '../assets/githublogo.png';
import './Proj.css';


const Project = () => {
  const data = [
    {
      title: "Know Your Weather APP",
      githubLink: "https://github.com/YashkShrivas4491/WeatherWebApp",
      image: weather,
      about:
        "This project is about building a web application to show a weather forecast using weather API from external services Open weather map.",
    },
    {
      title: "Apple Vision Pro UI",
      githubLink: "https://visionprouiclone.netlify.app/",
      image: visionpro,
      about:
        "Make meetings more meaningful. Apple Vision Pro makes it easy to collaborate and connect wherever you are.",
    },
    {
      title: "Github Profile Searcher",
      githubLink: "https://github.com/YashkShrivas4491/Github_Profile",
      image: githublogo,
      about:
        "Search and view users via the Github API. Requests are cached in session storage to limit the use of the API.",
    },
    {
      title: "Terminal CV",
      githubLink: "https://github.com/YashkShrivas4491/Terminal_Portfolio",
      image: Terminal,
      about:
        "Portfolio Website based on terminal UI design and you access the details of the users based on the commands.",
    },
  ];

  const dataElements = data.map((data) => (
    <ProjectList
      image={data.image}
      title={data.title}
      about={data.about}
      githubLink={data.githubLink}
    />
  ));

  return (
    <div
    style={{ background:"url(https://www.w3schools.com/images/background_in_space.gif)"}}
    >
      {" "}
      <div className="cards">{dataElements}</div>
    </div>
  );
};

export default Project;
