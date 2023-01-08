import React, { 
	Fragment, 
	useState, 
	useEffect, 
	createContext } from "react";
import ReactPaginate from "react-paginate";
import { UserData } from "./userData";
import './mainFeatures.css';
import { currentUser } from "../../../assets/scripts/mock";


let itemOffset = 0;
let endOffset;
export const MainFeatures = () => {
	let [users, setUsers] = useState([]);
	const itemsPerPage = 5;
  const [currentItems, setCurrentItems] = useState(users.slice(itemOffset, endOffset));
  const [pageCount, setPageCount] = useState('');
	const handlePageClick = (event) => {
    itemOffset = (event.selected * itemsPerPage) % users.length;
    endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
  };

	useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then(data => setUsers(data));
		}, []);
	
	useEffect(() => {
		setCurrentItems(users.slice(itemOffset, endOffset));
		setPageCount(users.length ? Math.ceil(users.length / itemsPerPage) : 0);
		endOffset = itemOffset + itemsPerPage;
		console.log(currentItems);
	}, [users])
	
		
   
	return(
		<section className="features">
		<div className="users">
			<UserData users={currentItems} section={'avatar'}/>
			<UserData users={currentItems} section={'name'}/>
			<UserData users={currentItems} section={"country"}/>
			<UserData users={currentItems} section={"age"}/>
			<UserData users={currentItems} section={"email"}/>
			<UserData users={currentItems} section={"role"}/>
		</div>

		<ReactPaginate
      containerClassName='content__nav'
      pageLinkClassName="content__btn"
      activeLinkClassName='content__btn--active'
      previousLinkClassName='content__btn'
      nextLinkClassName='content__btn'
      disabledLinkClassName='content__btn--disabled'
      breakLinkClassName='content__btn'
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      // renderOnZeroPageCount={null}
      />
		</section>
	)

}