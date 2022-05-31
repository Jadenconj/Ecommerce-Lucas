const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <div>
        <img src={product.image} alt="" />
      </div>
      <p>${product.price}</p>
    </div>
  );
};

export default ItemDetail;
