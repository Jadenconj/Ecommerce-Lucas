import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartProvider from "./context/CartContext";
import ThemeProvider from "./context/ThemeContext";
import Cart from "./pages/Cart";
import Contacto from "./pages/Contacto";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Navbar />
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Detail />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
