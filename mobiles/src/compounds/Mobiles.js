import React, { useContext } from "react";
import Data from "./data/phones";
import data from "./data/Data";
import MobileCard from "./MobileCard";
import SearchContext from "./SearchContext";
import "./styles/MobileCard.css";

function Mobiles() {
  const { valueFromNav } = useContext(SearchContext);
  const searchData = Data.filter((value) =>
    (value.brand + " " + value.model).includes(valueFromNav)
  );

  let renderValue = null;
  if (searchData.length > 0) {
    renderValue = searchData.map((value) => (
      <MobileCard value={value} key={value.id} />
    ));
  } else if (valueFromNav) {
    renderValue = <h3>No Mobiles avaiable on this search</h3>;
  } else {
    renderValue = data.map((value) => (
      <MobileCard value={value} key={value.id} />
    ));
  }

  return <div className="mobiles">{renderValue}</div>;
}

export default Mobiles;
