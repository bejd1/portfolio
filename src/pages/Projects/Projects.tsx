import "./Projects.css";
import { Link } from "react-router-dom";
import { ProjectList } from "./ProjectsList";

export const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-container-items">
        {ProjectList.map((project) => {
          const { name, id } = project;
          return (
            <Link to={`/project/${id}`}>
              <div className="projects-container-box">
                <div className="projects-container-box-inside"></div>
                <h3>{name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
