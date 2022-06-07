import { Button } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ stock, setShowButton}) => {
  const [count, setCount] = useState(1);
  const addcount = () => {
    if (count < stock) {
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
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
