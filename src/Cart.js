import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  const buy = () => {
    alert("navigating to checkout page");
  };
  if (isEmpty) return <h1 className="text-center"> Your cart isEmpty </h1>;
  return (
    <section className="container">
      <div className="row jistufy-content-center">
        <div className="col-12">
          
          <table className="table table-light m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index} className='carttr'>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} alt='jdslsd' />
                    </td>

                    <td>{item.title}</td>

                    <td>₹{item.price}</td>

                    <td>Quantity({item.quantity})</td>

                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btnsuccess"
                      >
                        {" "}
                        RemoveItem{" "}
                      </button>
                    </td>
                    
                  </tr>
                  
                );
              })}
            </tbody>
          </table>
          <h5 className="totalitems">
            {" "}
            Cart ({totalUniqueItems}) total Item :({totalItems})
          </h5>
          <div className="col-auto ms-auto ">
            <h2> total price: ₹{cartTotal} </h2>
          </div>
        </div>
        <div className="col-auto mb-2">
          <button onClick={() => emptyCart()} className="btn btn-success clrbtn">
            Clear Cart
          </button>
          <Link to='/checkout'>
          <button onClick={buy} className="btn btn-success clrbtn">
            Buy Now{""}
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;