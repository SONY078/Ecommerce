import React from "react";
import ItemCard from "./ItemCard";
import data from "./data";
import Nav from "./Navbar/Nav";


const Home = () => {
  return (
    <>
    <Nav/>
        <div id="container">
        <div id="slider">
            <div className="slide s1"></div>
            <div className="slide s2"></div>
            <div className="slide s3"></div>
            <div className="slide s4"></div>
            <div className="slide s5"></div>
        </div>
        </div>

      <h1 className="text-center mt-3">All items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.product.map((item, index) => {
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
export default Home;