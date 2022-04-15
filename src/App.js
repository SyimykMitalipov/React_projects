import './App.css';
import Home from './pages/Home';
import {Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Registerpage from './pages/RegisterPage';
import Cartpage from './pages/CartPage';
import Productinfo from './pages/ProductInfo'; 
import './stylesheets/layout.css'
import './stylesheets/product.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Registerpage />} />
          <Route path='/cart' exact element={<Cartpage />} />
          <Route path='/productinfo/:productid' exact element={<Productinfo />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
