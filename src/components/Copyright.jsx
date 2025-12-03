import React from "react";
import visa from "../assets/images/visa.png";
import paypal from "../assets/images/paypal.png";
import stripe from "../assets/images/stripe.png";
import verisign from "../assets/images/verisign.png";

export default function Copyright() {
  return (
    <section className="container h-24 flex justify-between items-center">
      <p>Nexton eCommerce. &copy; 2024</p>
      <div className="w-[236px] h-8 flex justify-between items-center">
        <img src={visa} alt="visa logo" />
        <img src={paypal} alt="paypal logo" />
        <img src={stripe} alt="stripe logo" />
        <img src={verisign} alt="verisign logo" />
      </div>
    </section>
  );
}
