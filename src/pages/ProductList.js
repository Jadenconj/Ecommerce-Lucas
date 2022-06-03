import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../components/CardList/CardList";
import productos from "../utils/productsMock";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setProducts([]);
    getProducts().then((response) => {
      filterByCategory(response);
    });
  }, [category]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      resolve(productos);
    });
  };

  const filterByCategory = (array) => {
    return array.map((item) => {
      if (item.category === category) {
        return setProducts((products) => [...products, item]);
      }
    });
  };

  return <CardList title={"Listado de Productos"} products={products} />;
};

export default ProductList;
