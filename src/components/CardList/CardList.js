import ItemCard from "../Card/Card";
import { Grid } from "@mui/material";

const CardList = ({ title, products }) => {
  return (
    <>
      <h2>{title}</h2>
      <Grid container spacing={2}>
        {products.map(({ title, price, image, id, stock }) => {
          return (
            <Grid item md={4} key={id}>
              <ItemCard
                title={title}
                price={price}
                image={image}
                stock={stock}
                id={id}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CardList;
