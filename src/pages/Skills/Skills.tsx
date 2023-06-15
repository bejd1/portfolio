import "./Skills.css";
import { SkillsList } from "./SkillsList";

export const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-container-items">
        {SkillsList.map((item, index) => {
          return (
            <div key={index} className="skills-container-item">
              <div className="skills-container-item-circle">
                <img src={item.url} alt={`${item.name} icon`} />
              </div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
