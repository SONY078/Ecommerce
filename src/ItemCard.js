import React from "react";
const ItemsCard = (props) => {
  return (

    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" style={{ height: "6rem" }}
          alt={props.title}/>

        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card">₹{props.price}</h5>
            <p>{props.spec}</p>
            <p>{props.description}</p>
            <h3>{props.rating}
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star"></span>
             <span class="fa fa-star"></span>
            </h3>
          <button
            className="btn btn-success">add cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;