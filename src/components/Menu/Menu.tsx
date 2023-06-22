import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import {
  Github,
  House,
  JournalCode,
  Linkedin,
  Person,
} from "react-bootstrap-icons";
import { NavHashLink } from "react-router-hash-link";
import "./Menu.css";

type Anchor = "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="menu-box"
    >
      <List className="menu">
        <ListItem className="menu-list">
          <Link to="/portfolio" onClick={scrollToTop}>
            <ListItemButton className="menu-item">
              <ListItemIcon className="menu-icon">
                <House style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Home" style={{ color: "black" }} />
            </ListItemButton>
          </Link>
          <NavHashLink smooth to="/portfolio#about">
            <ListItemButton className="menu-item">
              <ListItemIcon className="menu-icon">
                <Person style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="About me" />
            </ListItemButton>
          </NavHashLink>
          <Link to="/projects" onClick={scrollToTop}>
            <ListItemButton className="menu-item">
              <ListItemIcon className="menu-icon">
                <JournalCode style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Projects" style={{ color: "black" }} />
            </ListItemButton>
          </Link>
          <a href="https://www.linkedin.com/in/filip-bajdan-a6393b273/">
            <ListItemButton className="menu-item">
              <ListItemIcon className="menu-icon">
                <Linkedin style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" style={{ color: "black" }} />
            </ListItemButton>
          </a>
          <a href="https://github.com/bejd1">
            <ListItemButton className="menu-item">
              <ListItemIcon className="menu-icon">
                <Github style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Github" style={{ color: "black" }} />
            </ListItemButton>
          </a>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon
              onClick={toggleDrawer(anchor, true)}
              style={{ color: "white", fontSize: "30px" }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
