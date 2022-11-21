import React from "react";
import { PeopleOnline } from "../hero-top/hero-cards";

export const HeroInfo = () => {
	const Click = (e) => {
		console.log("Ви нажали на ", e.target.innerHTML);
	};
   return(
      <div className="hero__info">
         <h1 className="hero__title title">Let’s Explore<br></br>Three-Dimensional visual</h1>
         <p className="hero__text text">With virtual technology you can see the digital world feel more real and you can play the game with a new style.</p>
         <div className="hero__buttons">
            <button className="hero__btn button" onClick={Click}>Invite Friend</button>
            <button className="hero__btn--disable button" onClick={Click}>Explore device</button>
         </div>
         <PeopleOnline/>
      </div>
   );
}