import React from "react";
import PropTypes from "prop-types";

function QuantityChecker({ current, add, sub }) {
  return (
    <div>
      <button onClick={add(current)}>-</button>
      {current}
      <button onClick={sub(current)}>+</button>
    </div>
  );
}

QuantityChecker.propTypes = {
  current: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  sub: PropTypes.func.isRequired,
};

export default QuantityChecker;
