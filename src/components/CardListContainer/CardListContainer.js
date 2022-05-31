import { useEffect, useState } from "react";
import productos from "../../utils/productsMock";
import CardList from "../CardList/CardList";

const CardListContainer = (props) => {
  const [products, setProducts] = useState([]);


  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log("fallo llamada");
      })
      .finally(() => {});
  }, []);

  return (
    <>
      <CardList products={productos} />
    </>
  );
};

export default CardListContainer;
