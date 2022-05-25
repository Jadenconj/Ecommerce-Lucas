import { Button } from "@mui/material";
import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(3);

  const addcount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restcount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="button-count">
      <Button onClick={restcount} disabled={count === 1}>
        -
      </Button>
      <p>{count}</p>
      <Button onClick={addcount}>+</Button>
      <Button variant={"contained"}>Agregar</Button>
    </div>
  );
};

export default ItemCount;
