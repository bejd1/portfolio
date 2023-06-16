import { AboutMe } from "../AboutMe/AboutMe";
import { Contact } from "../Contact/Contact";
import { Main } from "../Main/Main";
import { Skills } from "../Skills/Skills";

export const Home = () => {
  return (
    <div className="App">
      <section className="main">
        <Main />
      </section>
      <section className="aboutme" id="about-me">
        <AboutMe />
      </section>
      <section className="skills">
        <Skills />
      </section>
      <section className="contact">
        <Contact />
      </section>
    </div>
  );
};
