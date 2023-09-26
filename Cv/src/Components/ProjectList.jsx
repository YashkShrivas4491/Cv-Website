
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectList = (props) => {
  const redirectToGitHub = () => {
    window.open(props.githubLink, "_blank");
  };

  return (
    <div className="card">
      <div>
        <img src={props.image} alt={props.title} />
      </div>

      <h4>{props.title}</h4>

      <p className="info">{props.about}</p>

      <div className="bt">
        <button
          className="card-btn"
          onClick={redirectToGitHub}>
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: "1em" }} />
          Github
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
