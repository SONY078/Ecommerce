import './Styling/sty.css'
import Home from "./Home";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Groceries from './Pages/Groceries';
import Nav1 from './Navbar/Nav1';
import MainPage from './Pages/MainPage';
import Electronics from './Pages/Electronics';
import Appliance from './Pages/Appliance';
import Books from './Pages/Books';
import Fashion from './Pages/Fashion';
import Toys from './Pages/Toys';
import Sports from './Pages/Sports';
import Category, { Gaming, Laptop, Mobiles, Wearables,Storage, Ethnic, Western, Footwear, MenWear, MenFootwear, Kids } from './Pages/Category';
import Login, { Checkout, Signup } from './Pages/Authentication/Login';
export default function App() {
  return (
    <div>
      <CartProvider>
       <BrowserRouter>
       <Nav1/>
       <Routes>
        <Route path="/groceries" element={<Groceries/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:category/:id' element={<MainPage/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/appliance' element={<Appliance/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/toys' element={<Toys/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/cameras' element={<Category/>}/>
        <Route path='/laptops' element={<Laptop/>}/>
        <Route path='/gaming' element={<Gaming/>}/>
        <Route path='/wearables' element={<Wearables/>}/>
        <Route path='/mobile-accessaries' element={<Mobiles/>}/>
        <Route path='/storage' element={<Storage/>}/>
        <Route path='/women-ethnicwear' element={<Ethnic/>}/>
        <Route path='/women-westernwear' element={<Western/>}/>
        <Route path='/women-footwear' element={<Footwear/>}/>
        <Route path='/men-wear' element={<MenWear/>}/>
        <Route path='/men-footwear' element={<MenFootwear/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
       </Routes>
       </BrowserRouter> 
      </CartProvider>
    </div>
  );
}
