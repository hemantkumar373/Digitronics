
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/assets/mobilebanner.jpg';
import women_banner from './components/assets/laptopbanner.png';
import kid_banner from './components/assets/accessoriesbanner.jpg';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mobile' element={<ShopCategory  banner={men_banner} category="Mobile"/>}/>
        <Route path='/Laptop' element={<ShopCategory banner={women_banner} category="Laptop"/>}/>
        <Route path='/Accessories' element={<ShopCategory banner={kid_banner} category="Accessories"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
