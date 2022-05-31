import { Grid } from "@mui/material";
import ItemCard from "../Card/Card";

const CardList = ({products}) => {
  return (
    <>
      <h1>Productos Recomendados</h1>

      <Grid container spacing={3}>
        {products.map((producto) => {
          const { title, price, image, stock, id } = producto;

          return (
            <Grid item md={4} key={id}>
              {/* <ItemCard
                title={title}
                price={price}
                image={image}
                stock={stock}
              /> */}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CardList;
