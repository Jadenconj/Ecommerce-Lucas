import { Container } from "@mui/material";
import "./App.css";
import CardList from "./components/CardList/CardList";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <CardList/>
      </Container>
    </div>
  );
}

export default App;
