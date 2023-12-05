import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MobileCard({ value }) {
  return (
    <div>
      <Link to={`/${value.id}`}>
        <div className="mobileImg">
          <img src={value.img_url} alt={value.brand + " " + value.model} />
        </div>
        <div className="mobileContent">
          <h3>{value.brand + " " + value.model}</h3>
          <h2>
            {(Number(value.approx_price_EUR) * 90).toLocaleString("ta-In", {
              style: "currency",
              currency: "INR",
            })}
          </h2>
        </div>
      </Link>
    </div>
  );
}

MobileCard.propTypes = {
  value: PropTypes.object.isRequired,
};

export default MobileCard;
