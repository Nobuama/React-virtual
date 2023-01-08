import React from "react";
import {Header} from "../../index";
import { Main } from "./main";
import "./games.css";
import '../../styles/mobile.css';
export const Games = ({isUserLogged, handleUserAuth, deleteUser}) => {
  
	return(
		<div className="wrapper">
       <Header
       isUserLogged={isUserLogged}
       handleUserAuth={handleUserAuth}
       deleteUser={deleteUser}
		 />
			<Main 
      isUserLogged={isUserLogged}/>
		</div>
		);
	}
