import React from "react";
import {Header, MenuBurger } from "../../index";
import { Main } from "./main";
import "../../styles/games.css"

export const Games = ({isUserLogged, handleUserAuth, deleteUser}) => {
  
	return(
		<div className="wrapper">
       <Header
       isUserLogged={isUserLogged}
       handleUserAuth={handleUserAuth}
       deleteUser={deleteUser}
		 />
			<MenuBurger/>
			<Main 
      isUserLogged={isUserLogged}/>
		</div>
		);
	}
