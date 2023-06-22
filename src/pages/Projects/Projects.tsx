import "./Projects.css";
import { Link } from "react-router-dom";
import { ProjectList } from "./ProjectsList";

type ProjectsProp = {
  id: number;
  name: string;
  image: string;
};

export const Projects: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-container-items">
        {ProjectList.map((project: ProjectsProp) => {
          const { name, id, image } = project;
          return (
            <Link key={id} to={`/project/${id}`} onClick={scrollToTop}>
              <div className="projects-container-box">
                <p className="projects-container-title">{name}</p>
                <div className="projects-container-box-inside">
                  <img
                    className="projects-container-box-inside-img"
                    src={image}
                    alt={name}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
