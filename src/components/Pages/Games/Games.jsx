import React, {useState} from "react";
import {Header, MenuBurger } from "../../index";
import { Main } from "./main";
import { PaginatedItems } from "./Pagination";
import { CARDS } from "../../index";
import "../../styles/games.css"


export const Games = ({isUserLogged, handleUserAuth, deleteUser, filter, games}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;
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
			<Main 
      isUserLogged={isUserLogged} 
      currentItems={currentItems} 
      filter={filter}/>
      <PaginatedItems
      games={games}
      pageCount={pageCount} 
      setItemOffset={setItemOffset} 
      itemsPerPage={itemsPerPage}/>
		</div>
		);
	}
