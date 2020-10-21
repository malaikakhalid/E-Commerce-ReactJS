import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link,useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {TotalBasket} from './reducer';
import axios from 'axios'

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState('');
  const[succeeded, setSucceeded]= useState(false);
  const[clientSecret,setClientSecret] = useState(true);

  useEffect( () => {
const getClientSecret = async() => {
  const response  = await axios({
    method: 'post',
    url: `/payments/create?total=${TotalBasket(basket) *100}`
  });
  setClientSecret(response.data.clientSecret)
}
getClientSecret();
  },[basket])
  const handleSubmit = async(e) => {
    // do all the fancy stuff
    e.preventDefault();
    setProcessing(true); 
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    .then(({paymentIntent }) => {
      // paymentIntent = paymentConfirm
      setSucceeded(true);
      setError(true);
      setProcessing(false);
      history.replace('/orders')
    })
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={TotalBasket(basket)} // Part of the homework
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Error */}

              {
                error && <div>{error}</div>
              }
            </form>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Payment;
