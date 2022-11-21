import React, {useState} from "react";
import {  NavLink } from "react-router-dom";
import { SignInDialog } from "../Dialogs/SignInDialog";
import { LoggedPerson } from "../loggedPerson/loggedPerson";
import { MENU } from "./menu-nav";


export const MenuNav = ({isOpen, isUserLogged, handleUserAuth, closeMenu}) => {
   const [isSignInDialogVisible, setIsSignInDialogVisible] = useState(false);

   const handleOpenSignInDialog = () => {
     setIsSignInDialogVisible(true);
   };

   const handleCloseSignInDialog = () => {
      setIsSignInDialogVisible(false);
   };

   return(
      <nav className="menu__nav">
         <ul className="menu__items">
            <li className="menu__burger-icon">
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
      </nav>
   )
}