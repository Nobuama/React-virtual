import React, {useState} from "react";
import { MenuNav } from "../menu-nav";
import { PersonMenu } from "../person-menu";
import "./header.css";


export const Header = ({isUserLogged, handleUserAuth, deleteUser}) => {
   const [isUserMenuOpened, setIsUseMenuOpened] = useState(false);
   
   const handleOpenUserMenu = () => {
      setIsUseMenuOpened(true);
   };

   const handleCloseUserMenu = () => {
      setIsUseMenuOpened(false);
   }

   return(
      <header className="header">
      <div className="menu">
         <a className="menu__name" href="index.html">Light</a>
         <MenuNav
         deleteUser={deleteUser}
         isUserLogged={isUserLogged}
         isOpen={handleOpenUserMenu}
         handleUserAuth={handleUserAuth}
         closeMenu={handleCloseUserMenu}/>
      </div>
      {isUserMenuOpened && <PersonMenu deleteUser={deleteUser} closeMenu={handleCloseUserMenu} />}
   </header>
   );
   
};

