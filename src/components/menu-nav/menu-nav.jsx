import React, {useEffect, useState} from "react";
import {  NavLink } from "react-router-dom";
import { SignInDialog } from "../Dialogs/SignInDialog";
import { LoggedPerson } from "../loggedPerson/loggedPerson";
import { MenuBurger } from "../menu-burger";
import { MENU } from "./menu-nav";


export const MenuNav = ({isOpen, isUserLogged, handleUserAuth, closeMenu, deleteUser}) => {
  const [isSignInDialogVisible, setIsSignInDialogVisible] = useState(false);
  const [isBurgerMenuOpened, setIsisBurgerMenuOpened] = useState(false);
  const handleOpenSignInDialog = () => setIsSignInDialogVisible(true);
  const handleCloseSignInDialog = () => setIsSignInDialogVisible(false);
  const handleOpenBurgerMenu = (e) =>  {
    setIsisBurgerMenuOpened(true);
    console.log(e.target);
  }

  const handleCloseBurgerMenu = (e) => {
    // e.stopPropagation();
    console.log(1);
    setIsisBurgerMenuOpened(false);
  };


  return(
     <nav className="menu__nav">
        <ul className="menu__items" onClick={((e)=>e.stopPropagation)}>
           <li className="menu__burger-icon" onClick={isBurgerMenuOpened ? handleCloseBurgerMenu : handleOpenBurgerMenu}>
              <span></span>
           </li>
				{MENU.map((link) => {
           return(
             <li key={link.id} className="menu__item">
              <NavLink to={link.href} className="menu__link">{link.text}</NavLink>
           </li>
					)
				})}
          {isUserLogged ? <LoggedPerson isOpen={isOpen} closeMenu={closeMenu}/> : 
          <li className="menu__item">
              <button 
                 id="button" 
                 className="button" 
                 onClick={handleOpenSignInDialog}>
                 Sign in
              </button>
           </li>}
        </ul>
        {isSignInDialogVisible && (
          <SignInDialog 
          closeDialog={handleCloseSignInDialog} 
          handleUserAuth={handleUserAuth} 
          />
          )}
       {isBurgerMenuOpened && (
         <MenuBurger
         handleCloseBurgerMenu={handleCloseBurgerMenu}
         isBurgerMenuOpened={isBurgerMenuOpened}
         isUserLogged={isUserLogged}
         handleOpenSignInDialog={handleOpenSignInDialog}         
         deleteUser={deleteUser}
         />
       )}
     </nav>
  )
}