import "./Main.css";
import { motion } from "framer-motion";
import { ArrowDownShort } from "react-bootstrap-icons";
import { NavHashLink } from "react-router-hash-link";
import myPhoto from "../../images/me.png";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="main-container-left">
        <img
          className="main-container-my-image"
          src={myPhoto}
          alt="my profile img"
        />
      </div>
      <div className="main-container-right">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="main-container-right-title"
        >
          Hi, I'm Filip
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          Frontend Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
          className="main-container-right-text"
        >
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </motion.p>
      </div>
      <NavHashLink smooth to="/portfolio#about-me">
        <div className="main-container-arrow pulse">
          <ArrowDownShort />
        </div>
      </NavHashLink>
    </div>
  );
};
