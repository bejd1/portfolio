import {
  Envelope,
  House,
  JournalCode,
  Linkedin,
  List,
} from "react-bootstrap-icons";
import "./Nav.css";
import { Link } from "react-router-dom";
// import Example from "../../components/Switch/Switch";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-left-icon">
          <Envelope />
        </div>
        <div className="nav-left-text">bejdi7@gmail.com</div>
      </div>
      <div className="nav-right">
        <div className="nav-right-links">
          <Link to="/">
            <div className="nav-right-link">
              <div className="nav-right-link-icon">
                <House />
              </div>
              <p className="nav-right-link-title">Home</p>
            </div>
          </Link>
          <Link to="/projects">
            <div className="nav-right-link">
              <div className="nav-right-link-icon">
                <JournalCode />
              </div>
              <p className="nav-right-link-title">Projects</p>
            </div>
          </Link>
          <a href="https://www.linkedin.com/in/bejdi7-undefined-a6393b273/">
            <div className="nav-right-link">
              <div className="nav-right-link-icon">
                <Linkedin />
              </div>
              <p className="nav-right-link-title">Linkedin</p>
            </div>
          </a>
        </div>
        <div className="nav-right-switch">
          <List className="list" />
          {/* <Example /> */}
        </div>
      </div>
    </div>
  );
};
