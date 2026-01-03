import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "./utilities/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="this is emage" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-item">
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = () => {
  return (
    <div className="restaurent-card">
      <img className="res-card-img"></img>
      <h1></h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <div className="search-txt-label">
          <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
        </div>
        <div className="input-container">
          <div className="dropdown-container">
            <select>
              <option>Varanasi</option>
              <option>Gorakhpur</option>
              <option>Mau</option>
              <option>Delhi</option>
            </select>
          </div>
          <div>
            <input className="input-box" placeholder="Enter Here" />
          </div>
        </div>
      </div>
      <div className="restaurent-cards-container">
        <RestaurentCard />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h1>this is footer</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
