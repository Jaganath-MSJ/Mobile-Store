import React, { useContext } from "react";
import "./styles/Navigation.css";
import { Link } from "react-router-dom";
import SearchContext from "./SearchContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const { valueFromNav, setValueFromNav } = useContext(SearchContext);
  const handleSearch = (event) => {
    setValueFromNav(event.target.value.trim());
  };
  return (
    <nav>
      <h2>
        <Link to="/">Mobiles Store</Link>
      </h2>
      <input
        type="search"
        placeholder="Search for mobiles"
        value={valueFromNav}
        onChange={handleSearch}
      />
      <ul className="menu">
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
