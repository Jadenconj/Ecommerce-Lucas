import "./Navbar.css";
import { AppBar, Toolbar } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <AppBar position="static" className="appbar">
      <Toolbar>
        <div className="container-logo">
          <img src="./logo.svg" alt="logo" />
        </div>
        <ul className="navbar">
          <li>
            <button>Inicio</button>
          </li>
          <li>
            <button>Productos</button>
          </li>
          <li>
            <button>Nosotros</button>
          </li>
          <li>
            <button>Contacto</button>
          </li>
        </ul>
        <CartWidget/>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
