import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productos from "../../utils/productsMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const productFilter = productos.find((product) => {
    return product.id === id;
  });

  useEffect(() => {
    if (productFilter === undefined) {
      navigate("/NotFound");
    } else {
      setProduct(productFilter);
    }
  }, [productFilter, navigate]);

  return (
    <>
      <ItemDetail data={product} />
    </>
  );
};

export default ItemDetailContainer;
