import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from 'react-router-dom'

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
      <h1>
          CheckOut (<Link to="/checkout">{basket?.length} items </Link>)
      </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>R-366 Sector 7D3</p>
            <p>Pakistan, Karachi</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Item and Delivery</h3>
          </div>
          <div className="payment__item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
            <div className="payment__title">
<h3>Payment Method</h3>
            </div>
            <div className="payment_details">

            </div>
        </div>
        <div className="">

        </div>
      </div>
    </div>
  );
}

export default Payment;
