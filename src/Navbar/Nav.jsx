import React from 'react'
import '../Styling/sty.css'
import Groceries from '../Images/groceries.jpg'
import Fashion from '../Images/fashion.jpeg'
import Electronics from '../Images/Electronic.jpeg'
import Appliance from '../Images/appliances.jpeg'
import FSports from '../Images/sports-fitness.jpg';
import Toys from '../Images/toys.jpg';
import Books from '../Images/books.jpeg';
import { Link } from 'react-router-dom'
function Nav() 
{
  return (
    <div>
        
            
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
           <ul className="navbar-nav" style={{listStyleType:"none"}}>
               <li className="nav-item active"> <div id="subnav1">
                                <Link to="/groceries">
                                    <div id="nav11">
                                        <img src={Groceries} alt="navimages" id='navimage1'/>
                                    </div>
                                    <div id="nav12">
                                        "Groceries"
                                        
                                    </div>
                                </Link>
                            </div></li>
               <li className="nav-item">
               <div id="subnav3">
                            <Link to="/electronics">
                                    <div id="nav11">
                                        
                                        <img src={Electronics} alt="navimages" id='navimage1' />
                                    </div>
                                    <div id="nav12">
                                        "Electronics"
                                        <i onclick="myFunction(this)" className="fa-solid fa-angle-down"></i>
                                    </div>
                                </Link>
                            </div>
                            
                            <ul className="dropdown-e-menu">
                            <li className="nav-sub-item">
                            <Link className="dropdown-item" to='/laptops'>Laptop and Desktop &emsp;&nbsp;<i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN Laptop and Desktop</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/laptops"> All</Link></li>
                                    <li><Link className="dropdown-item" to='/laptops'>Laptops</Link></li>
                                    <li><Link className="dropdown-item" to="/laptops">Gaming Laptops</Link></li>
                                    <li><Link className="dropdown-item" to="/laptops">Desktop PCs</Link></li>
                                    <li><Link className="dropdown-item" to="/laptops">All In One PCs</Link></li>
                                    <li><Link className="dropdown-item" to="/laptops">Mini PCs</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/cameras">Cameras & Accessories <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN Cameras</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/cameras"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/cameras">DSLR & Mirrorless</Link></li>
                                    <li><Link className="dropdown-item" to="/cameras">Sports & action</Link></li>
                                    <li><Link className="dropdown-item" to="/cameras">Instant Cameras</Link></li>                                               
                                    <li><Link className="dropdown-item" to="/cameras">Drone</Link></li>
                                    <li><Link className="dropdown-item" to="/cameras">Camera tripods</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/gaming">Gaming &emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;&nbsp;<i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN Gaming</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/gaming"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/gaming">Gaming Consoles</Link></li>
                                    <li><Link className="dropdown-item" to="/gaming">Gaming Mouse</Link></li>
                                    <li><Link className="dropdown-item" to="/gaming">Gaming Keyboards</Link></li>                                                
                                    <li><Link className="dropdown-item" to="/gaming">Gamepads</Link></li>
                                    <li><Link className="dropdown-item" to="/gaming">Gaming Mousepads</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/wearables">Smart Wearables &emsp;&nbsp;&emsp;&nbsp;<i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN Smart Wearables</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/wearables"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/wearables">Smart Watches</Link></li>
                                    <li><Link className="dropdown-item" to="/wearables">Smart Bands</Link></li>
                                    <li><Link className="dropdown-item" to="/wearables">Smart Glasses</Link></li>                                                
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/mobile-accessaries">MobileAccessory &emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN MobileAccessory</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/mobile-accessaries"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/mobile-accessaries">Plain Cases</Link></li>
                                    <li><Link className="dropdown-item" to="/mobile-accessaries">Designer Cases</Link></li>
                                    <li><Link className="dropdown-item" to="/mobile-accessaries">Screen Guards</Link></li>                                               
                                    <li><Link className="dropdown-item" to="/mobile-accessaries">Camera Lens Protectors</Link></li>
                                    <li><Link className="dropdown-item" to="/mobile-accessaries">Mobiles Accessories Combos</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/storage">Storage &emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;<i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE Storage</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/storage"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/storage">Mobile MemoryCard</Link></li>
                                    <li><Link className="dropdown-item" to="/storage">ComputerStorage Pendrive</Link></li>
                                    <li><Link className="dropdown-item" to="/storage">Mobile StoragePendrive</Link></li>                                               
                                    <li><Link className="dropdown-item" to="/storage">External HardDrive</Link></li>
                                    <li><Link className="dropdown-item" to="/storage">InternalHardDrive</Link></li>
                              </ul>
                        </li>
                    </ul>
                </li>
               <li className="nav-item">
               <div id="subnav2">
                            <Link to="/fashion" >
                                    <div id="nav11">
                                        <img src={Fashion} alt="navimages" id='navimage1'/>
                                    </div>
                                    <div id="nav12">
                                        "Fashion"
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                </Link>
                            </div>
                    <ul className="dropdown-menu">
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/women-ethnicwear">Women Ethnic wear <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN WOMEN ETHNIC</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/women-ethnicwear"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/women-ethnicwear">Women Sarees</Link></li>
                                    <li><Link className="dropdown-item" to="/women-ethnicwear"> Women Kurtas & Kurtis</Link></li>
                                    <li><Link className="dropdown-item" to="/women-ethnicwear">Women Gowns</Link></li>
                                    <li><Link className="dropdown-item" to="/women-ethnicwear">Women Lehenga Cholis</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/women-westernwear">Women Western wear <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN WOMEN WESTERN</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/women-westernwear"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/women-westernwear">Women Tops</Link></li>
                                    <li><Link className="dropdown-item" to="/women-westernwear">Women Dresses</Link></li>
                                    <li><Link className="dropdown-item" to="/women-westernwear">Women T-shirts & Polo T-shirts</Link></li>                                                
                                    <li><Link className="dropdown-item" to="/women-westernwear">Women Track Pants</Link></li>
                                    <li><Link className="dropdown-item" to="/women-westernwear">Women Jumpsuit</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/women-footwear">Women Footwear <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN WOMEN Footwear</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/women-footwear"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/women-footwear">Women Flats,Slipper Flip Flops</Link></li>
                                    <li><Link className="dropdown-item" to="/women-footwear">Women Wedges</Link></li>
                                    <li><Link className="dropdown-item" to="/women-footwear">Women Heels</Link></li>                                                
                                    <li><Link className="dropdown-item" to="/women-footwear">Women Sports Shoes</Link></li>
                                    <li><Link className="dropdown-item" to="/women-footwear">Women Boots</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/men-wear">men wear <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN MEN WEAR</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/men-wear"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/men-wear">Men's T-Shirts</Link></li>
                                    <li><Link className="dropdown-item" to="/men-wear">Men's Ethnic Sets</Link></li>
                                    <li><Link className="dropdown-item" to="/men-wear">Men's Suit</Link></li>                                                
                                    <li><Link className="dropdown-item" to="/men-wear">Men's Pants</Link></li>
                                    <li><Link className="dropdown-item" to="/men-wear">Men's Raincoat</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/men-footwear">men Footwear <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN MEN Footwear</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/men-footwear"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/men-footwear">Men's Sports Shoes</Link></li>
                                    <li><Link className="dropdown-item" to="/men-footwear">Men's Slippers & Flip Flops</Link></li>
                                    <li><Link className="dropdown-item" to="/men-footwear">Active Footwear</Link></li>                                                
                                    <li><Link className="dropdown-item" to="/men-footwear">Men's Casual Shoes</Link></li>
                                    <li><Link className="dropdown-item" to="/men-footwear">Combo Footwear</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/kids">Kids <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN Kids</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/kids"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/kids">Boys & Girls Tshirts</Link></li>
                                    <li><Link className="dropdown-item" to="/kids">Boys & Girls Combosets</Link></li>
                                    <li><Link className="dropdown-item" to="/kids">Kids Slipper Flip Flop</Link></li>                                                
                                    <li><Link className="dropdown-item" to="/kids">Boys & Girls Ethnic Wear</Link></li>
                                    <li><Link className="dropdown-item" to="/kids">Infant Wear</Link></li>
                              </ul>
                        </li>
                    </ul>
            </li>
            <li className="nav-item"><div id="subnav4">
                            <Link to="/appliance">
                                    <div id="nav11">
                                        <img src={Appliance} alt="navimages" id='navimage1'/>
                                    </div>
                                    <div id="nav12">
                                        "Appliances"
                                    </div>
                                </Link>
                            </div>
                            
            </li>
               <li className="nav-item"><div id="subnav5">
                            <Link to="/toys">
                                    <div id="nav11">
                                        <img src={Toys} alt="navimages" id='navimage1'/>
                                    </div>
                                    <div id="nav12">
                                        "Toys"
                                    </div>
                                </Link>
                            </div></li>
                        <li className="nav-item">
                        <div id="subnav6">
                            <Link to="/sports">
                                    <div id="nav11">
                                        <img src={FSports} alt="navimages" id='navimage1'/>
                                    </div>
                                    <div id="nav12">
                                        "Sports & Fitness"
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                </Link>
                            </div>
                            <ul className="dropdown-s-menu">
                                    <li><Link className="dropdown-item" to="/sports"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Sports Equipments</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Gym Equipments</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Fitness Equipments</Link></li>                                                
                                    <li><Link className="dropdown-item" to="/sports">Shakers & Sippers</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Yoga</Link></li>
                              </ul>
                            </li>
               <li className="nav-item"><div id="subnav7">
                            <Link to="/books">
                                    <div id="nav11">
                                        <img src={Books} alt="navimages" id='navimage1' />
                                    </div>
                                    <div id="nav12">
                                        "Books"
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                </Link>
                            </div>
                            <ul className="dropdown-b-menu">
                                    <li><Link className="dropdown-item" to="/books"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/books">Entrance Exams</Link></li>
                                    <li><Link className="dropdown-item" to="/books">Literature & Fiction</Link></li>
                                    <li><Link className="dropdown-item" to="/books">Young Readers</Link></li>                                                
                                    <li><Link className="dropdown-item" to="/books">E-Learning</Link></li>
                                    <li><Link className="dropdown-item" to="/books">Non Fiction</Link></li>
                              </ul>
                           
                        </li>
                    
           </ul>
       </nav>

       <br />
       {/* <hr id='hr1'/> */}
    </div>
  )
}

export default Nav;

