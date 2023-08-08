import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./compounds/Navigation";
import Mobiles from "./compounds/Mobiles";
import MobileDetails from "./compounds/MobileDetails";
import Cart from "./compounds/Cart";

import SearchContext from "./compounds/SearchContext";

import "./App.css";

function App() {
  const [valueFromNav, setValueFromNav] = useState();
  return (
    <div className="App">
      <SearchContext.Provider value={{ valueFromNav, setValueFromNav }}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Mobiles />} />
            <Route path="/:mobileId" element={<MobileDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
