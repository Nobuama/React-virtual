import React, {useState} from "react";
import {Header, MenuBurger } from "../../index";
import { Main } from "./main";
import { PaginatedItems } from "./Pagination";
import { CARDS } from "../../index";
import "../../styles/games.css"


export const Games = ({isUserLogged, handleUserAuth, deleteUser}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 2;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = CARDS.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(CARDS.length / itemsPerPage);

	return(
		<div className="wrapper">
       <Header
       isUserLogged={isUserLogged}
       handleUserAuth={handleUserAuth}
       deleteUser={deleteUser}
		 />
			<MenuBurger/>
			<Main isUserLogged={isUserLogged} currentItems={currentItems}/>
      <PaginatedItems pageCount={pageCount} setItemOffset={setItemOffset}/>
		</div>
		);
	}
