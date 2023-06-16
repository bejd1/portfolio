import { Envelope, Linkedin, Telephone } from "react-bootstrap-icons";
import "./Contact.css";
// import { ContactInput } from "./ContactInput";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-container-row">
        <div className="contact-container-info">
          <div className="contact-container-info-email">
            <div className="icon">
              <Envelope />
            </div>
            <p>bejdi7@gmail.com</p>
          </div>
          <div className="contact-container-info-linkedin">
            <div className="icon">
              <Linkedin />
            </div>
            <a href="https://www.linkedin.com/in/bejdi7-undefined-a6393b273/">
              Linkedin
            </a>
          </div>
          <div className="contact-container-info-phone">
            <div className="icon">
              <Telephone />
            </div>
            <p>+48 534 792 217</p>
          </div>
        </div>

        {/* <ContactInput /> */}
      </div>
    </div>
  );
};
