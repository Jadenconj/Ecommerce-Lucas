import "./Navbar.css";
import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = ["cafe", "frappuccino", "te"];

  return (
    <AppBar position="static" className="appbar">
      <Toolbar>
        <div className="container-logo">
          <Link to="/">
            <img src="./logo.svg" alt="logo" />
          </Link>
        </div>
        <ul className="navbar">
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant="text"
              className="navbar_btn"
            >
              <Link to="/">Inicio</Link>
            </Button>
          </li>
          <li>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant="text"
              className="navbar_btn"
            >
              Productos
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {categories.map((cat) => {
                return (
                  <MenuItem onClick={handleClose}>
                    <Link to={`/products/${cat}`}>{cat}</Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant="text"
              className="navbar_btn"
            >
              <Link to="/nosotros">Nosotros</Link>
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant="text"
              className="navbar_btn"
            >
              <Link to="/contacto">Contacto</Link>
            </Button>
          </li>
        </ul>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
