import React from "react";

export const MenuBurger = () => {
   return (
      <ul className="menu__burger">
         <li>Home</li>
         <li><a href="games.html">Games</a></li>
         <li>Features</li>
         <li><button className="sign-in__btn-mob button">
            <span>Sign in</span>
            <span hidden>Sign out</span>
         </button></li>
      </ul>
   );
}