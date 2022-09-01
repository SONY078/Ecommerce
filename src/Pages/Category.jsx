import React from "react";
import ItemCard from "../ItemCard";
import data from "../data";
import { Link } from "react-router-dom";
 const Category = () => 
{

  return (
    <>
      <h1 className="text-center mt-3">Cameras</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.product.filter((a)=>(a.subcat==='camera')).map((item, index) => {
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
export default Category;

export const Laptop = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='laptop')).map((item, index) => {
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
}

export const Gaming = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='gaming')).map((item, index) => {
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
}

export const Wearables = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='wearables')).map((item, index) => {
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
}

export const Mobiles = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='mobileacc')).map((item, index) => {
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
}

export const Storage = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='storage')).map((item, index) => {
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
}

export const Ethnic = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='ethnic')).map((item, index) => {
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
}

export const Western = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='western')).map((item, index) => {
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
}

export const Footwear = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='wf')).map((item, index) => {
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
}

export const MenWear = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='mw')).map((item, index) => {
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
}

export const MenFootwear = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='mf')).map((item, index) => {
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
}

export const Kids = ()=>
{
    return (
        <>
          <h1 className="text-center mt-3">Cameras</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {data.product.filter((a)=>(a.subcat==='kids')).map((item, index) => {
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
}
