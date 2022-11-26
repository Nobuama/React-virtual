import React from "react";
import { HeaderBot1, HeaderBot2 } from "../../../../assets/images/images";


export const HeroBot = () => {
	const Click = (e) => {
		console.log("Ви натисли ", e.target.innerHTML);
	}
   return(
      <div className="hero__bot">
         <div className="hero__bot-card">
            <img className="hero__bot-image" src={HeaderBot1} alt="hero-bot-img1"/>
            <img className="hero__bot-image" src={HeaderBot2} alt="hero-bot-img2"/>
         </div>
         <div className="hero__bot-descr">
            <h2 className="hero__bot-title title">New Experience In Playing Game</h2>
               <p className="hero__bot-text text">You can try playing the game with a new style and of course a more real feel, like you are the main character in your game and adventure in this new digital world.</p>
               <button className="hero__bot-btn button" onClick={Click}>Get it Now</button>
         </div>
      </div>
   );
}