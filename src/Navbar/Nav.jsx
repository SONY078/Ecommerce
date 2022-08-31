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
                                    <li><Link className="dropdown-item" to='/lap'>Laptops</Link></li>
                                    <li><Link className="dropdown-item" to="/gaming">Gaming Laptops</Link></li>
                                    <li><Link className="dropdown-item" to="/desktops">Desktop PCs</Link></li>
                                    <li><Link className="dropdown-item" to="/pc">All In One PCs</Link></li>
                                    <li><Link className="dropdown-item" to="/mini">Mini PCs</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/cameras">Cameras & Accessories <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN Cameras</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/cameras"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/dslr">DSLR & Mirrorless</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Sports & action</Link></li>
                                    <li><Link className="dropdown-item" to="/icameras">Instant Cameras</Link></li>                                               
                                    <li><Link className="dropdown-item" to="/drone">Drone</Link></li>
                                    <li><Link className="dropdown-item" to="/tripods">Camera tripods</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="/gaming">Gaming &emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;&nbsp;<i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN Gaming</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="/gaming"> All</Link></li>
                                    <li><Link className="dropdown-item" to="/consoles">Gaming Consoles</Link></li>
                                    <li><Link className="dropdown-item" to="/mouse">Gaming Mouse</Link></li>
                                    <li><Link className="dropdown-item" to="/keyboards">Gaming Keyboards</Link></li>                                                
                                    <li><Link className="dropdown-item" to="/gamepads">Gamepads</Link></li>
                                    <li><Link className="dropdown-item" to="#">Gaming Mousepads</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="#">Smart Wearables &emsp;&nbsp;&emsp;&nbsp;<i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN Smart Wearables</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Smart Watches</Link></li>
                                    <li><Link className="dropdown-item" to="#">Smart Bands</Link></li>
                                    <li><Link className="dropdown-item" to="#">Smart Glasses</Link></li>                                                
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="#">MobileAccessory &emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN MobileAccessory</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Plain Cases</Link></li>
                                    <li><Link className="dropdown-item" to="#">Designer Cases</Link></li>
                                    <li><Link className="dropdown-item" to="#">Screen Guards</Link></li>                                               
                                    <li><Link className="dropdown-item" to="#">Camera Lens Protectors</Link></li>
                                    <li><Link className="dropdown-item" to="#">Mobiles Accessories Combos</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="#">Storage &emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;&emsp;&nbsp;<i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE Storage</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Mobile MemoryCard</Link></li>
                                    <li><Link className="dropdown-item" to="#">ComputerStorage Pendrive</Link></li>
                                    <li><Link className="dropdown-item" to="#">Mobile StoragePendrive</Link></li>                                               
                                    <li><Link className="dropdown-item" to="#">External HardDrive</Link></li>
                                    <li><Link className="dropdown-item" to="#">InternalHardDrive</Link></li>
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
                            <Link className="dropdown-item" to="#">Women Ethnic wear <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN WOMEN ETHNIC</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women Sarees</Link></li>
                                    <li><Link className="dropdown-item" to="#"> Women Kurtas & Kurtis</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women Gowns</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women Lehenga Cholis</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="#">Women Western wear <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN WOMEN WESTERN</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women Tops</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women Dresses</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women T-shirts & Polo T-shirts</Link></li>                                                
                                    <li><Link className="dropdown-item" to="#">Women Track Pants</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women Jumpsuit</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="#">Women Footwear <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN WOMEN Footwear</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women Flats,Slipper Flip Flops</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women Wedges</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women Heels</Link></li>                                                
                                    <li><Link className="dropdown-item" to="#">Women Sports Shoes</Link></li>
                                    <li><Link className="dropdown-item" to="#">Women Boots</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="#">men wear <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN MEN WEAR</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Men's T-Shirts</Link></li>
                                    <li><Link className="dropdown-item" to="#">Men's Ethnic Sets</Link></li>
                                    <li><Link className="dropdown-item" to="#">Men's Suit</Link></li>                                                
                                    <li><Link className="dropdown-item" to="#">Men's Pants</Link></li>
                                    <li><Link className="dropdown-item" to="#">Men's Raincoat</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="#">men Footwear <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN MEN Footwear</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Men's Sports Shoes</Link></li>
                                    <li><Link className="dropdown-item" to="#">Men's Slippers & Flip Flops</Link></li>
                                    <li><Link className="dropdown-item" to="#">Active Footwear</Link></li>                                                
                                    <li><Link className="dropdown-item" to="#">Men's Casual Shoes</Link></li>
                                    <li><Link className="dropdown-item" to="#">Combo Footwear</Link></li>
                              </ul>
                        </li>
                        <li className="nav-sub-item">
                            <Link className="dropdown-item" to="#">Kids <i className="fa-solid fa-angle-right"></i></Link>
                              <ul className="dropdown-sub-menu">
                              <h4>MORE IN Kids</h4>
                              {/* <hr /> */}
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Boys & Girls Tshirts</Link></li>
                                    <li><Link className="dropdown-item" to="#">Boys & Girls Combosets</Link></li>
                                    <li><Link className="dropdown-item" to="#">Kids Slipper Flip Flop</Link></li>                                                
                                    <li><Link className="dropdown-item" to="#">Boys & Girls Ethnic Wear</Link></li>
                                    <li><Link className="dropdown-item" to="#">Infant Wear</Link></li>
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
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Sports Equipments</Link></li>
                                    <li><Link className="dropdown-item" to="#">Gym Equipments</Link></li>
                                    <li><Link className="dropdown-item" to="#">Fitness Equipments</Link></li>                                                
                                    <li><Link className="dropdown-item" to="#">Shakers & Sippers</Link></li>
                                    <li><Link className="dropdown-item" to="#">Yoga</Link></li>
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
                                    <li><Link className="dropdown-item" to="#"> All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Entrance Exams</Link></li>
                                    <li><Link className="dropdown-item" to="#">Literature & Fiction</Link></li>
                                    <li><Link className="dropdown-item" to="#">Young Readers</Link></li>                                                
                                    <li><Link className="dropdown-item" to="#">E-Learning</Link></li>
                                    <li><Link className="dropdown-item" to="#">Non Fiction</Link></li>
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

