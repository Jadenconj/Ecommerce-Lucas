import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  const [size, setSize] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <div className="detail-product-container">
      <div className="detail-product-image">
        <img src={`../${data.image}`} alt="imgProduct" />
      </div>
      <div className="detail-product-info">
        <div className="detail-product-info__title">
          <h2>{data.title}</h2>
        </div>
        <p>${data.price}</p>
        <span>¡Podés pagar en efectivo o tarjeta!</span>
        <label>Selecciona tamaño de vaso</label>
        <Select
          className="select-custom"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          placeholder="Selecciona tamaño de vaso"
          onChange={handleChange}
        >
          <MenuItem value={"chico"}>Chico</MenuItem>
          <MenuItem value={"mediano"}>Mediano</MenuItem>
          <MenuItem value={"grande"}>Grande</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default ItemDetail;
