import React from 'react'
import { useParams} from 'react-router-dom';
import ItemCard from "../ItemCard";
import data from "../data";
function MainPage() 
{
    
    const {id} = useParams();
  return (
    <>
    <h1 className="text-center mt-3">Product</h1>
      <section className="py-5 container">
        <div className="row justify-content-center"> 

        
          {
            // eslint-disable-next-line
          data.product.filter((a)=>(a.id==id)).map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                price={item.price}
                title={item.title}
                item={item}
                spec={item.spec}
                desc={item.description}
                rating={item.rating}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  )
}

export default MainPage;


    
  