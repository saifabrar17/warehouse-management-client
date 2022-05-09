import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';
import NotFound from './components/Shared/NotFound/NotFound';
import Products from './components/ManageProducts/Products/Products';
import ProductDetail from './components/ManageProducts/ProductDetail/ProductDetail';
import AddProduct from './components/ManageProducts/AddProduct/AddProduct';
import ManageAllProducts from './components/ManageProducts/ManageAllProducts/ManageAllProducts';
import MyItems from './components/ManageProducts/MyItems/MyItems';
import RequireAuth from './components/Authentication/RequireAuth/RequireAuth';
import LowStock from './components/Home/LowStock/LowStock';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/low' element={<LowStock></LowStock>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/add_new_product' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/manage_products' element={
          <RequireAuth>
            <ManageAllProducts></ManageAllProducts>
          </RequireAuth>
        }></Route>
        <Route path='/my_items' element={
          <RequireAuth>
          <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/inventory' element={<Products></Products>}></Route>
        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
