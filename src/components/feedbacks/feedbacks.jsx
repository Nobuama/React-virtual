import React from "react";
import { FEEDBACKS } from "./feedbacks";

export const Feedbacks = () => {
   return(
      <section className="feedback">
         <h2 className="feedback__title title">What our clients say</h2>
         <p className="feedback__text text">See what our customer say about us. It really matter for us. How good or bad we will make ir for evaluation to make EhyalLive better.</p>
         <ul className="feedback__people">
            {FEEDBACKS.map((feedback) => {
               return(
               <li key={feedback.id} className="feedback__person">
                  <div className="feedback__logo">
                     <span className="gold text">starstar</span>
                     <span className="clear text">star</span></div>
                     <p className="feedback__comment text">{feedback.comment}</p>
                  <div className="feedback__nickname">
                     <img className="feedback__avatar" src={feedback.img} alt="person"/>
                     <div className="nickname__text-wrapper">
                        <p className="feedback__name text">{feedback.name}</p>
                        <p className="feedback__nick text">{feedback.nickName}</p>
                     </div>
                  </div>
               </li>);
            })} 
         </ul>
      </section>
   );
}