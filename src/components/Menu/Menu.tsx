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

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 220 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="menu">
        <ListItem
          style={{
            display: "flex",
            flexDirection: "column",
            width: "220px",
          }}
        >
          <Link to="/">
            <ListItemButton
              style={{ width: "220px", textAlign: "center", fontSize: "18px" }}
            >
              <ListItemIcon className="menu-icon">
                <House />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                style={{ color: "black", fontSize: "18px" }}
              />
            </ListItemButton>
          </Link>
          <Link to="/about">
            <ListItemButton
              style={{ width: "220px", textAlign: "center", fontSize: "18px" }}
            >
              <ListItemIcon className="menu-icon">
                <Person />
              </ListItemIcon>
              <ListItemText primary="About me" />
            </ListItemButton>
          </Link>
          <Link to="/projects">
            <ListItemButton
              style={{ width: "220px", textAlign: "center", fontSize: "18px" }}
            >
              <ListItemIcon className="menu-icon">
                <JournalCode />
              </ListItemIcon>
              <ListItemText
                primary="Projects"
                style={{ color: "black", fontSize: "18px" }}
              />
            </ListItemButton>
          </Link>
          <a href="https://www.linkedin.com/in/bejdi7-undefined-a6393b273/">
            <ListItemButton
              style={{ width: "220px", textAlign: "center", fontSize: "18px" }}
            >
              <ListItemIcon className="menu-icon">
                <Linkedin />
              </ListItemIcon>
              <ListItemText
                primary="Linkedin"
                style={{ color: "black", fontSize: "18px" }}
              />
            </ListItemButton>
          </a>
          <a href="https://github.com/bejd1">
            <ListItemButton
              style={{ width: "220px", textAlign: "center", fontSize: "18px" }}
            >
              <ListItemIcon className="menu-icon">
                <Github />
              </ListItemIcon>
              <ListItemText
                primary="Github"
                style={{ color: "black", fontSize: "18px" }}
              />
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
