import { useRef } from "react";
import "./Skills.css";
import { SkillsList } from "./SkillsList";
import { useInView } from "framer-motion";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div
        className="skills-container-items"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
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
