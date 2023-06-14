import { Envelope, List } from "react-bootstrap-icons";
import "./Nav.css";
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
          <p>Project</p>
          <p>Linkedin</p>
          <p>Contact</p>
        </div>
        <div className="nav-right-switch">
          <List className="list" />
          {/* <Example /> */}
        </div>
      </div>
    </div>
  );
};
