import { Routes, Route } from "react-router-dom";
import './App.css';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './components/layout/layout';
import Login from './containers/Login'
import ProductDetail from "./components/productDetail/productDetail";
import ListProduct from "./components/listProduct/listProduct";
import Cart from "./components/cart/cart";
import Order from "./components/order/order"
import Product from "./components/product/product";
import { useSelector } from 'react-redux';
import {UserAccount} from './components/userAccount/UserAccount'
function App() {
  const userInfo = useSelector(state => state.user.userInfo);
  console.log(userInfo);
  return (
    <Routes>
      <Route path='/' element={<Layout><ListProduct /></Layout>} />
      <Route path='/cart' element={userInfo ? <Layout><Cart /></Layout> : <Login />} />
      <Route path='/order' element={userInfo ? <Layout><Order /></Layout> : <Login />} />
      <Route path='/user' element={userInfo ? <Layout><UserAccount/></Layout> : <Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products/:id' element={<Layout><ProductDetail /></Layout>} />
      <Route path='/products' element={userInfo ? <Layout><Product /></Layout> : <Login />} />
    </Routes>
  );
}

export default App;
