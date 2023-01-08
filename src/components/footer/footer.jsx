import React from "react";
import "./footer.css";

export const Footer = () => {
	const submitEmail = (e) => {
		e.preventDefault();
		console.log("Відправлено листа на ваш E-mail");
	}
   return(
   <footer className="footer">
      <div className="footer__contact">
         <h2 className="footer__contact-title title">Explore product in new way</h2>
         <p className="footer__contact-text text"> We specialize in creating visual identities for products and branda in your company.</p>
         <form className="footer__form">
            <input type="email" className="footer__email" placeholder="Your Email"/>
            <button className="footer__end-btn button" onClick={submitEmail}>Start</button>
         </form>
      </div>
   </footer>);
};

