import { Container } from "@mui/material";
import "./App.css";
import CardListContainer from "./components/CardListContainer/CardListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <CardListContainer/>
      </Container>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
