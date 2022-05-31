import { useEffect, useState } from "react";
import { producto } from "../../utils/productsMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(producto);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((res) => {
      console.log(res);
      setProduct(res);
    });
  }, []);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
