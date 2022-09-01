import React,{useState} from 'react'
import { useParams} from 'react-router-dom';
import data from "../data";
import { useCart } from 'react-use-cart';
function MainPage(props) 
{
  const { addItem } = useCart();
    const {id} = useParams();
    const [active,setActive]=useState(false);
  return (
    <>
    <h1 className="text-center mt-3">Product description</h1>
      <section className="main-container">
        <div className="main-section"> 
          {
            // eslint-disable-next-line
          data.product.filter((a)=>(a.id==id)).map((item, index) => {
            return (
              <>
              <img src={item.img} alt="mainimage" id='mainview' />
              <div id="sub-main">
                <h1>{item.title}</h1>
                <h2>₹{item.price}</h2>
                <h4>{item.color}</h4>
                <h2>{item.rating}</h2>
                <h3>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </h3>
                <p>{item.spec}</p>
                <p>{item.description}</p>
                <button className="btn success" onClick={() => addItem(item,setActive(!active))}>{ active?'remove from cart':'Add To Cart'}</button>
              </div>
              
              </>

            );
          })}
        </div>
      </section>
    </>
  )
}

export default MainPage;


    
  