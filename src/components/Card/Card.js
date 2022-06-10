import "./Card.css";
import { Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ItemCard = ({ title, price, image, id }) => {

  const {darkTheme} = useContext(ThemeContext)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className={`item-card ${darkTheme ? 'dark-mode' : ''}`}>
        <div>
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
