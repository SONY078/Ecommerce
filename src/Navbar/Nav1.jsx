import React from 'react'
import Logo from '../Images/download.png'
import '../Styling/sty.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react/dist/auth0-react.cjs'
import { useCart } from "react-use-cart";
function Nav1() 
{
  const { loginWithRedirect,logout, isAuthenticated } = useAuth0();
  const {totalItems} = useCart();
  // const {
  //   totalItems,
  // } = useCart();

  // const [searchdata,setSearchdata] = useState(data);
  // const [searchString,setSearchString]=useState('');
  // useEffect(()=>
  // {
  //   if(searchString.length === 0)
  //   {
  //     setSearchdata(data);
  //   }
  //   else
  //   {
  //     const srchObj = [];
  //     data.forEach((single,index)=>
  //     {
  //       Object.values(single).every((only,vindex)=>
  //       {
  //         if(only.toLowerCase().includes(searchString.toLowerCase()))
  //         {
  //           srchObj.push(single);
  //           return;
  //         }
  //       })
  //     })
  //     setSearchdata(srchObj)
  //   }
  // },[searchString])



  return (
    <div>
      {/* <p>{searchdata}</p> */}
        <div id="navskai">
            <div id="logo">
            <Link to='/home'><img src={Logo} alt="logo" id='logoskai'/></Link>
            </div>
            <form>
              <input type="text"  name="" id='search' />
              <button className='searchicon'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <div id="sub-nav">
            {/* <Link to='/login'><button id='bt1'>Log in</button></Link> */}
            {
                      isAuthenticated ? (
                        <button onClick={() => logout({ returnTo: window.location.origin })} id='bt1'>Log Out
                        </button>
                      ) : (
                        <button onClick={() => loginWithRedirect()} id='bt1'>Log In</button>
                        // <button onClick={() => loginWithRedirect()} type="submit" className='loginbtn'>Login</button>
                      )
                    }
              <select name="En" id="lan">
                <option value="English">En</option>
              </select>
              <span className="totalitemscart">{totalItems}</span>
              <Link to='/cart'>
                <span><i className="fa-solid fa-cart-shopping"></i></span>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Nav1