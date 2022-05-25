import "./Card.css";
import { Card, CardContent } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";

const ItemCard = (props) => {
  const { title, price, image } = props;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="item-card">
          <div>
            <img src={`./${image}`} alt="" />
          </div>
          <p>{title}</p>
          <span>${price}</span>
          <ItemCount />
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
