import "./Projects.css";
import { Link } from "react-router-dom";
import { ProjectList } from "./ProjectsList";

type ProjectsProp = {
  id: number;
  name: string;
  image: string;
};

export const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-container-items">
        {ProjectList.map((project: ProjectsProp) => {
          const { name, id, image } = project;
          return (
            <Link key={id} to={`/project/${id}`}>
              <div className="projects-container-box">
                <div className="projects-container-box-inside">
                  <img src={image} alt={name} />
                </div>
                <h3>{name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
