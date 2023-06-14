import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-container-items">
        <div className="skills-container-item">
          <div className="skills-container-item-circle"></div>
          <p>Css</p>
        </div>
        <div className="skills-container-item">
          <div className="crown">
            <img
              className="crown-emoji"
              src="https://em-content.zobj.net/thumbs/160/microsoft/209/crown_1f451.png"
              alt="crown emoji"
            />
          </div>
          <div className="skills-container-item-circle"></div>
          <p>React</p>
        </div>
        <div className="skills-container-item">
          <div className="skills-container-item-circle"></div>
          <p>TypeScript</p>
        </div>
        <div className="skills-container-item">
          <div className="skills-container-item-circle"></div>
          <p>Sass</p>
        </div>
        <div className="skills-container-item">
          <div className="skills-container-item-circle"></div>
          <p>Sass</p>
        </div>
      </div>
    </div>
  );
};
