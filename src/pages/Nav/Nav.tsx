import {
  Envelope,
  Github,
  House,
  JournalCode,
  Linkedin,
  Person,
} from "react-bootstrap-icons";
import "./Nav.css";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../../components/Menu/Menu";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import { useCopyToClipboard } from "usehooks-ts";
import { useState } from "react";

export const Nav = () => {
  const email: string = "bejdi7@gmail.com";
  const [isCopied, setIsCopied] = useState(false);
  const [value, copy] = useCopyToClipboard();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const copyToClipboard = () => {
    copy(email);
    setIsCopied(true);
  };

  return (
    <div className="nav">
      <motion.div
        initial={{ x: -330 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="nav-left"
      >
        <Tooltip
          title={!isCopied ? "Copy email" : "Copied!"}
          className="tooltop"
          arrow
        >
          <div className="nav-left-icon" onClick={() => copyToClipboard()}>
            <Envelope />
          </div>
        </Tooltip>
        {/* {isCopied && <div>elo</div>} */}
        <div className="nav-left-text">{email}</div>
      </motion.div>
      <motion.div
        initial={{ x: 700, y: 0 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="nav-right"
      >
        <div className="nav-right-links">
          <Link to="/" onClick={scrollToTop}>
            <div className="nav-right-link">
              <div className="nav-right-link-icon">
                <House />
              </div>
              <p className="nav-right-link-title">Home</p>
            </div>
          </Link>
          <NavHashLink smooth to="/#about">
            <div className="nav-right-link">
              <div className="nav-right-link-icon">
                <Person />
              </div>
              <p className="nav-right-link-title">About me</p>
            </div>
          </NavHashLink>
          <Link to="/projects" onClick={scrollToTop}>
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
          <a href="https://github.com/bejd1">
            <div className="nav-right-link">
              <div className="nav-right-link-icon">
                <Github />
              </div>
              <p className="nav-right-link-title">Github</p>
            </div>
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 200, y: 0 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="nav-right-menu"
      >
        <TemporaryDrawer />
      </motion.div>
    </div>
  );
};
