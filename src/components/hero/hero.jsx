import React from "react";
import { HeroInfo, HeroImgBlock, HeroBot } from "..";

export const Hero = () => {
   return (
      <section className="hero">
         <div className="hero__top">
            <HeroInfo/>
            <HeroImgBlock/>
         </div>
         <HeroBot/>
      </section>
   );
}