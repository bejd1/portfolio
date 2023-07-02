import React from "react";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="about-me-container" id="about">
      <h2>About me</h2>
      <div className="center">
        <div className="about-me-container-underline"></div>
      </div>
      <div className="about-me-container-text">
        <p>
          I'm a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section.
        </p>
        <br />
        <p>
          I'm self-taught, my native language is Polish and English at the B2
          level. A year ago my story with writing code began, at the beginning I
          only changed the colors of the button but I got into it and that's how
          I learned the basics that allow me to create internet pages.
        </p>
        <br />
        <p>
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </p>
      </div>
    </div>
  );
};
