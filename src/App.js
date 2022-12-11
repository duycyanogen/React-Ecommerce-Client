import { Routes, Route } from "react-router-dom";
import './App.css';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './components/layout/layout';
import Login from './pages/Login'
import ProductDetail from "./components/productDetail/productDetail";
import ListProduct from "./components/listProduct/listProduct";
import Cart from "./components/cart/cart";
import Order from "./components/order/order"
import TransactionManager from "./components/transactionManager/transactionManager"
import Product from "./components/product/product";
import { useSelector } from 'react-redux';
import { UserAccount } from './components/userAccount/UserAccount'
import { StatisticsPage } from "./components/statisticsPage/StatisticsPage";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { ErrorPage } from "./pages/ErrorPage";
import { AdminRoute } from "./components/layout/AdminRoute";
function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/" element=<Layout />>
        <Route path='/' element={<ListProduct />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element=<Layout />>
          <Route path='cart' element={<Cart />} />
          <Route path='order' element={<Order />} />
          <Route path='transactionmanager' element={<TransactionManager />} />
          <Route path='user' element={<UserAccount />} />
          <Route path='products/:id' element={<ProductDetail />} />
          <Route path='products' element={<Product />} />
        </Route>
      </Route>
      <Route element=<AdminRoute />>
        <Route path="/" element=<Layout />>
          <Route path='/statistics' element={<StatisticsPage />} />
        </Route>
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
