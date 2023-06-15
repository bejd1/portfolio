import React from "react";
import "./Project.css";
import { Github, Globe } from "react-bootstrap-icons";

export const Project = () => {
  return (
    <div className="project-container">
      <h2>Field finder</h2>
      <div className="project-container-grid">
        <div className="project-container-left">
          <img
            style={{ height: "500px", width: "350px" }}
            src="https://m.media-amazon.com/images/I/61f3atnSHcL._AC_UF1000,1000_QL80_.jpg"
            alt=""
          />
        </div>
        <div className="project-container-right">
          <h4>About</h4>
          <p>
            Desc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            quas aut delectus cupiditate, accusantium quisquam dolorem animi
            quaerat error, veniam, culpa laborum?
          </p>
          <h4>Technologies</h4>
          <ul className="project-container-right-technologies">
            <li>css</li>
            <li>react</li>
            <li>redux</li>
            <li>typescript</li>
          </ul>
          <h4>Links</h4>
          <div className="project-container-right-btns">
            <div className="project-container-right-btns-github">
              <div className="nav-right-link-icon">
                <Github />
              </div>
              <a href="https://github.com/bejd1">Github</a>
            </div>
            <div className="project-container-right-btns-live">
              <div className="nav-right-link-icon">
                <Globe />
              </div>
              <a href="https://github.com/bejd1">Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
