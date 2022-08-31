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

export default function App() {
  return (
    <div>
      <CartProvider>
       <BrowserRouter>
       <Nav1/>
       {/* <Nav/> */}
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
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
       </BrowserRouter> 
      </CartProvider>
    </div>
  );
}
