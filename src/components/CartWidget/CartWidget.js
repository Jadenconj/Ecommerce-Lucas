import { useState, useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";

const CartWidget = () => {
  const { cartListItems, deleteProduct } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="cart-container-icon">
      <ShoppingCartIcon
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="container-item-list-cart">
          {cartListItems.length === 0 && <p>No hay productos agregados</p>}
          {cartListItems.map((item) => {
            return (
              <div className="item-cart-prod" key={item.data.id}>
                <div className="cart-prod__image">
                  <img src={`/${item.data.image}`} alt="prod carrito" />
                </div>
                <div className="cart-prod__info">
                  <p>{item.data.title}</p>
                  <span>$ {item.data.price}</span>
                </div>
                <div className="cart-prod__action">
                  <Button
                    onClick={() => {
                      deleteProduct();
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Menu>
    </div>
  );
};

export default CartWidget;
