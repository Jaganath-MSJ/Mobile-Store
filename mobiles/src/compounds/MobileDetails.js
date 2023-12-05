import "./styles/MobileDetails.css";
import { useParams, Link } from "react-router-dom";
import Data from "./data/phones";
import { host } from "./APIRoute.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faCartPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function MobileDetails() {
  const { mobileId } = useParams();
  const value = Data.filter((item) => {
    return item.id === Number(mobileId);
  })[0];

  const { id, brand, model, img_url, approx_price_EUR: price } = value;
  const product_id = Number(id);
  const quantity = 1;
  const priceInt = Number(price);
  const total_price = priceInt;

  const handleAddToCart = async (event) => {
    event.preventDefault();
    fetch(host + "/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id,
        brand,
        model,
        img_url,
        price,
        quantity,
        total_price,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mobileDetailsPage">
      <Link to="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2xs" /> Back to Home
      </Link>
      <div className="mobileDetails">
        <div className="imageDetails">
          <img src={value.img_url} alt={value.brand + " " + value.model} />
        </div>
        <div className="details">
          <h1>
            {value.brand} {value.model} ({value.internal_memory})
          </h1>
          <h2>
            {(Number(value.approx_price_EUR) * 90).toLocaleString("ta-In", {
              style: "currency",
              currency: "INR",
            })}
          </h2>
          <h3>{value.status}</h3>
          <div className="mainDetails">
            <p>
              Color: <span>{value.colors}</span>
            </p>
            <p>
              Memory:{" "}
              <span>{value.internal_memory + " + " + value.memory_card}</span>
            </p>
            <p>
              RAM: <span>{value.RAM}</span>
            </p>
            <p>
              Brand: <span>{value.brand}</span>
            </p>
            <p>
              Model: <span>{value.model}</span>
            </p>
            <p>
              Operating System: <span>{value.OS}</span>
            </p>
            <p>
              Camera:{" "}
              <span>
                {value.primary_camera + " + " + value.secondary_camera}
              </span>
            </p>
            <p>
              SIM: <span>{value.SIM}</span>
            </p>
          </div>
          <button onClick={handleAddToCart}>
            Add to Card <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <Link to="/cart">
            <button>
              To Cart <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </Link>
          <div className="aboutDetails">
            <h4>About this mobile:</h4>
            <ul>
              <li>Dimentions of the mobile {value.dimentions}</li>
              <li>
                Display type {value.display_type}, size {value.display_size},
                resolution {value.display_resolution}
              </li>
              <li>CPU used {value.CPU}</li>
              <li>Network Speed are {value.network_speed}</li>
              <li>Battery used {value.battery}</li>
              <li>
                Sensors, GPU, USB and Chipset are {value.sensors}, {value.GPU},{" "}
                {value.USB}, {value.Chipset}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileDetails;
