import React from "react";
import { VALUES } from "./values";

export const Values = () => {
   return(
      <section className="values">
         <div className="values__textBlock">
            <h2 className="values__title title">Our company values culture</h2>
            <p className="values__text text">We specialize in creating visual identities for products and branda in your company.</p>
         </div>
         <div className="values__items">
            {VALUES.map((value) =>{
               return (
               <div className="values__item" key={value.id}>
                  <img className="values__icon" src={value.img} alt={value.alt}/>
                  <p className="values__item-text text">{value.text}</p>
               </div>
               );
            })}
         </div>
      </section>
   );
}