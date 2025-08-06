import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * Header
 *  -logo
 *  -nav items
 * Body
 *  -search bar
 *  -ReastaurantCards
 *      -img
 *      -Name of Rest, star Rating, cuisine,
 * Footer
 *  -copyright
 *  -links
 *  -Adress
 *  -contacts
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);
