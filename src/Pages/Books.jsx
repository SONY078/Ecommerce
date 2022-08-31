import React from "react";
import ItemCard from "../ItemCard";
import data from "../data";
const Books = () => 
{

  return (
    <>
      <h1 className="text-center mt-3">Books</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.product.filter((a)=>(a.category==='books')).map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                price={item.price}
                title={item.title}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Books;