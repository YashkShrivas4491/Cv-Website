
import { NavLink } from "react-router-dom";
import './Hom.css';

const Nav = () => {
  return (
      <div className="nv">
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="projects" className="nav-link">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="experience" className="nav-link">
            Experience
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav