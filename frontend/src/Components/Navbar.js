import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent !important",
    boxShadow: "none",
    zIndex: 100,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backdropFilter: "blur(10px)",
    webkitBackdropFilter: "blur(10px)",
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
  menuButton: {
    marginRight: "16px", // Direct value instead of theme.spacing
    color: "white !important",
  },
  menuItem: {
    color: "white",
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
  menuPaper: {
    backgroundColor: "black",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Your Website Name
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              classes={{ paper: classes.menuPaper }}
            >
              <MenuItem
                className={classes.menuItem}
                onClick={handleMenuClose}
                component="a"
                href="/"
              >
                Home
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={handleMenuClose}
                component="a"
                href="/about"
              >
                About
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={handleMenuClose}
                component="a"
                href="/events"
              >
                Events
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={handleMenuClose}
                component="a"
                href="/tickets"
              >
                Tickets
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={handleMenuClose}
                component="a"
                href="/our-team"
              >
                Our Team
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" className={classes.button} href="/">
              Home
            </Button>
            <Button color="inherit" className={classes.button} href="/about">
              About
            </Button>
            <Button color="inherit" className={classes.button} href="/events">
              Events
            </Button>
            <Button color="inherit" className={classes.button} href="/tickets">
              Tickets
            </Button>
            <Button color="inherit" className={classes.button} href="/our-team">
              Our Team
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              component={Link}
              to="/signup" // Replace this with the correct route path
            >
              Sign In
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
