import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { MENU } from "../menu-nav/menu-nav";

export const MenuBurger = ({isBurgerMenuOpened, handleCloseBurgerMenu, handleOpenSignInDialog, isUserLogged, deleteUser}) => {
  const menuRef = useRef(null);

  useEffect(() => {
      const handleClick = (e) => {
          if (!menuRef.current) return;
          if (e.target.classList.contains("menu__burger-icon") || e.target == document.querySelector("span")) return;

          if (!e.target.closest(".menu__burger")) {
            handleCloseBurgerMenu();
          }
      };

      document.addEventListener("click", handleClick);

      return () => {
          document.removeEventListener("click", handleClick);
      };
  }, [menuRef, handleCloseBurgerMenu]);

  const LogOutBurgerMenu = () =>{
    deleteUser();
    handleCloseBurgerMenu();
  };


   return (
      <ul className="menu__burger" ref={menuRef}>
         {MENU.map((link) => {
           return(
             <li key={link.id}>
              <NavLink to={link.href}>{link.text}</NavLink>
           </li>)}
           )}
          
         <li>
            <button className="sign-in__btn-mob button" onClick={isUserLogged ? LogOutBurgerMenu : handleOpenSignInDialog}>
              {isUserLogged ? 
              <span>Sign out</span> : <span>Sign in</span>}
           </button>
         </li>
      </ul>
   );
}