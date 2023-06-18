import "./Main.css";
import { motion } from "framer-motion";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="main-container-left">
        <img
          className="main-container-my-image"
          src="https://nataliarakowska.pl/wp-content/uploads/2022/11/nrakowska-112.jpg"
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
          Front-End Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
        >
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </motion.p>
      </div>
    </div>
  );
};
