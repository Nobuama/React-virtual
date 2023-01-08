import React, {useEffect} from "react";
import { currentUser } from "../../assets/scripts/mock";

export const LoggedPerson = ({isOpen, closeMenu}) => {
   useEffect(() => {
      const hideMenuOnClick = e => 
      (e.key === "Escape" || 
      (!e.target.closest('.person__menu') && !e.target.closest('.menu__items > li:last-child')))
       ?  closeMenu() : null;

      document.body.addEventListener("keydown", hideMenuOnClick);
      document.body.addEventListener("click", hideMenuOnClick);
      return () => {
         document.body.removeEventListener("keydown", hideMenuOnClick);
         document.body.removeEventListener("click", hideMenuOnClick);
      };
   }, [closeMenu]);



   
   return (
   <li className="menu__item logged-person">
   <button className="logged__btn" onClick={isOpen}>
   <img className="menu__person" src={currentUser.userPhoto} alt="person.img"/>
   </button>
   </li>);
};
