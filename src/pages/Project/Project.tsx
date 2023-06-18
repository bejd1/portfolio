import { useState } from "react";
import "./Project.css";
import { Github, Globe } from "react-bootstrap-icons";
import { useParams, Link } from "react-router-dom";
import { ProjectList } from "../Projects/ProjectsList";

type ProjectProp = {
  id: number;
  name: string;
  image: string;
  desciption: string;
  technologies: string[];
  github: string;
  live: string;
};

export const Project = () => {
  const [items] = useState<ProjectProp[]>([...ProjectList]);
  const { id } = useParams();

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div className="page-not-exist">
        <h2>This page does not exist</h2>
        <Link to="/">
          <button className="page-not-exits-btn">back to home</button>
        </Link>
      </div>
    );
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <div className="project-container" key={item.id}>
      <h2>{item.name}</h2>
      <div className="project-container-grid">
        <div className="project-container-left">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="project-container-right">
          <h4>About</h4>
          <p>{item.desciption}</p>

          <h4>Technologies</h4>
          <ul className="project-container-right-technologies">
            {item.technologies.map((tech, index) => {
              return <li key={index}>{tech}</li>;
            })}
          </ul>
          <h4>Links</h4>
          <div className="project-container-right-btns">
            <div className="project-container-right-btns-github">
              <div className="nav-right-link-icon">
                <Github />
              </div>
              <a href={item.github}>Github</a>
            </div>
            <div className="project-container-right-btns-live">
              <div className="nav-right-link-icon">
                <Globe />
              </div>
              <a href={item.live}>Live</a>
            </div>
          </div>
          <Link to="/projects" onClick={scrollToTop}>
            <button>Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
