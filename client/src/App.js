import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Order from './components/Pages/Order/Order';
import Home from './components/Pages/Home/Home';
import Product from './components/Pages/Product/Product';
import Cart from './components/Pages/Cart/Cart';
import Nav from './components/views/Navbar/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from './config';
function App() {
  return (
    <main>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
