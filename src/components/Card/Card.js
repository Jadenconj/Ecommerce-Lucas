import "./Card.css";
import { Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ title, price, image, id }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="item-card">
          <div>
            <img src={`../${image}`} alt="" />
          </div>
          <p>{title}</p>
          <span>${price}</span>
        </div>
        <div className="button-detail">
          <Button>
            <Link to={`/product/${id}`}>Ver Detalle</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
