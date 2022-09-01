import React from "react";
import ItemCard from "../ItemCard";
import data from "../data";
import { Link } from "react-router-dom";
const Groceries = () => 
{
  return (
    <>
      <h1 className="text-center mt-3">Groceries</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.product.filter((a)=>(a.category==='groceries')).map((item, index) => {
            return (
              <Link to={`/${item.category}/${item.id}`}>
              <ItemCard
                img={item.img}
                price={item.price}
                title={item.title}
                item={item}
                key={index}
              />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Groceries;