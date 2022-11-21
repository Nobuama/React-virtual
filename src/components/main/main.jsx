import React from "react";
import "./main.css";
import "./mobile-main.css";
import { MainContent, Hero, Values, Feedbacks} from "..";


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