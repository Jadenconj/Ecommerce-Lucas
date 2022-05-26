import "./Card.css";
import { Card, CardContent, Button } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemCard = (props) => {
  const { title, price, image, stock } = props;
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

  function onAdd(count) {
    console.log(`Agregaste ${count} al carrito`);
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="item-card">
          <div>
            <img src={`./${image}`} alt="" />
          </div>
          <p>{title}</p>
          <span>${price}</span>
          <div className='button-count'>
          <Button onClick={restcount}>-</Button>
          <p>{count}</p>
          <Button onClick={addcount}>+</Button>
          </div>
          <ItemCount onAdd={onAdd} count={count} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
