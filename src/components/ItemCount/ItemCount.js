import { Button } from "@mui/material";
import { useContext, useState } from "react";
import {CartContext} from "../../context/CartContext";



const ItemCount = ({ data, setShowButton}) => {

  const {addProductToCart} = useContext(CartContext)
  const [count, setCount] = useState(1);

  const addcount = () => {
    if (count < data.stock) {
      setCount(count + 1);
    }
  };

  const restcount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="button-count">
        <Button onClick={restcount}>-</Button>
        <p>{count}</p>
        <Button onClick={addcount}>+</Button>
      </div>
      <div className="button-count">
        <Button
          onClick={() => {
            setShowButton(true);
            addProductToCart({data});
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

export default ItemCount;