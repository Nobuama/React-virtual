import React from "react";
import { HeroImg, HeroLine } from "../../assets/images/images";

export const HeroImgBlock = () => {
   return (
      <div className="hero__img-block">
         <img src={HeroImg} className="hero__img" alt=""/>
         <div className="hero__img-wrapper">
            <h2 className="hero__img-title title">Cinematic Virtual Reality</h2>
            <img className="hero__img-line" src={HeroLine} alt="button-line"/>
            <p className="hero__img-text text">Let’s be the best for more real and effective results and ready <br></br>
               to explore the limitless world that we have prepared for you.</p>
         </div>
      </div>
   );
}