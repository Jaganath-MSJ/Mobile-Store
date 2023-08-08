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
  return (
    <div class="mobiles">
      {searchData.length > 0 ? (
        searchData.map((value) => {
          return <MobileCard value={value} key={value.id} />;
        })
      ) : valueFromNav ? (
        <h3>No Mobiles avaiable on this search</h3>
      ) : (
        data.map((value) => {
          return <MobileCard value={value} key={value.id} />;
        })
      )}
    </div>
  );
}

export default Mobiles;
