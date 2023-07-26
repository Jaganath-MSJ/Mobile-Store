import React, { useState, useEffect } from "react";
import "./styles/Cart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [onChange, setOnChange] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((item) => setCartData(item.allDetails));
  }, onChange);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartData.length !== 0 ? (
        <div>
          <table className="cartTable">
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartData &&
                cartData.map((item, pos) => {
                  return (
                    <CartMap
                      item={item}
                      pos={pos}
                      cartData={cartData}
                      handleChange={setOnChange}
                    />
                  );
                })}
            </tbody>
          </table>
          <h3>
            Total Amount :{" "}
            {(
              cartData.reduce((a, b) => {
                return a + b.total_price;
              }, 0) * 90
            ).toLocaleString("ta-In", { style: "currency", currency: "INR" })}
          </h3>
        </div>
      ) : (
        <p>You cart is empty.</p>
      )}
    </div>
  );
}

function CartMap({ item, pos, cartData, handleChange }) {
  const { _id, price } = item;
  const [value, setValue] = useState(item.quantity);

  const handleAddQuantity = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/addQuantity/" + { _id }, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id, value, price }),
    }).catch((error) => {
      console.error("Error:", error);
    });
    setValue((v) => v + 1);
    item.total_price = item.price * value;
  };

  const handleSubQuantity = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/subQuantity/" + { _id }, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id, value, price }),
    }).catch((error) => {
      console.error("Error:", error);
    });
    setValue((v) => v - 1);
    item.total_price = item.price * value;
  };

  const handleRemove = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/remove/" + { _id }, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    }).catch((error) => {
      console.error("Error:", error);
    });
    cartData.splice(pos, 1);
    handleChange(Math.random(6));
    console.log(cartData);
  };

  return (
    <tr>
      <td>
        <img src={item.img_url} alt={item.brand + " " + item.model} />
      </td>
      <td>{item.brand + " " + item.model}</td>
      <td>
        {(item.price * 90).toLocaleString("ta-In", {
          style: "currency",
          currency: "INR",
        })}
      </td>
      <td>
        <div className="quantity">
          <button onClick={handleSubQuantity} disabled={value <= 1}>
            <FontAwesomeIcon icon={faMinus} size="lg" />
          </button>
          {value}
          <button onClick={handleAddQuantity} disabled={value >= 10}>
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
        </div>
      </td>
      <td>
        {(item.total_price * 90).toLocaleString("ta-In", {
          style: "currency",
          currency: "INR",
        })}
      </td>
      <td>
        <button onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrash} size="xl" />
        </button>
      </td>
    </tr>
  );
}

export default Cart;
