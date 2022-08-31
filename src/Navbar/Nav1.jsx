import React from 'react'
import Logo from '../Images/download.png'
import '../Styling/sty.css'
import { Link } from 'react-router-dom'
function Nav1() {
  return (
    <div>
        <div id="navskai">
            <div id="logo">
            <Link to='/home'><img src={Logo} alt="logo" id='logoskai'/></Link>
            </div>
            <form>
              <input type="text" id='search'/>
              <button className='searchicon'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <div id="sub-nav">
            <button id='bt1'>Log in</button>
              <button id='bt1'>Sign Up</button>
              <select name="En" id="lan">
                <option value="English">En</option>
              </select>
              <Link to='/cart'><span><i className="fa-solid fa-cart-shopping"></i></span></Link>
            </div>
        </div>
    </div>
  )
}

export default Nav1