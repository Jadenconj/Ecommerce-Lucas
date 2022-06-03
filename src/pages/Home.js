import CardList from "../components/CardList/CardList";
import { useEffect, useState } from "react";
import productos from "../utils/productsMock";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      resolve(productos);
    });
  };

  return (
    <div>
      <CardList title={"Productos Recomendados"} products={products} />
    </div>
  );
};

export default Home;
