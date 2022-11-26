import React from "react";
import {Hero, MainContent, Feedbacks, Values} from "../index";
import "./main.css";


export const Main = () => {
   return(
      <main className="main">
         <Hero/>
         <MainContent/>
         <Feedbacks/>
         <Values/>
      </main>
   );
};