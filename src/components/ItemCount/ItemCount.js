import { Button } from "@mui/material";

const ItemCount = (props) => {
  const { onAdd, count } = props;

  return (
    <div className="button-count">
      <Button
        onClick={() => {
          onAdd(count);
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
