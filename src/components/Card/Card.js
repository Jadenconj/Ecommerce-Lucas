import './Card.css'
import { Button, Card, CardContent } from "@mui/material";

const ItemCard = (props) => {
  const {title, price, image} = props
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="item-card">
          <div>
            <img src={`./${image}`} alt=""/>
          </div>
          <p>{title}</p>
          <span>{price}</span>
          <Button variant={'contained'}>Detalle</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
