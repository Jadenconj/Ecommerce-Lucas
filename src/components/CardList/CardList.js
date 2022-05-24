import { Grid } from "@mui/material";
import ItemCard from "../Card/Card";


const CardList = () => {
    return (
        <>
        <h1>Productos Recomendados</h1>
        <Grid container >
          <Grid item md={4}>
            <ItemCard title={'Capuchino'} price={500} image={'cafe_01.jpg'} />
          </Grid>
          <Grid item md={4}>
            <ItemCard title={'Frapuchino'} price={600} image={'cafe_02.jpg'}/>
          </Grid>
          <Grid item md={4}>
            <ItemCard title={'Café helado'} price={500} image={'cafe_03.jpg'}/>
          </Grid>
        </Grid>
        </>
    );
}
 
export default CardList;