import { useEffect, useState } from "react";
import CardList from "../CardList/CardList";

const CardListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const productos = [
    {
      title: "Capuchino",
      price: 500,
      image: "cafe_01.jpg",
      stock: 6,
      id: 1,
    },
    {
      title: "Frapuchino",
      price: 600,
      image: "cafe_02.jpg",
      stock: 8,
      id: 2,
    },
    {
      title: "Café helado",
      price: 500,
      image: "cafe_03.jpg",
      stock: 4,
      id: 3,
    },
  ];

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
