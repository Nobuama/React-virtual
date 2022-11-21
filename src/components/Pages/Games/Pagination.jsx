import React from 'react';
import ReactPaginate from 'react-paginate';
import { CARDS } from '../../../assets/scripts/localStorage';

export const PaginatedItems = ({itemsPerPage, pageCount, setItemOffset}) =>{
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % CARDS.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        containerClassName='content__nav'
        pageLinkClassName="content__btn"
        activeClassName='content__btn--active'
        previousLinkClassName='content__btn'
        nextLinkClassName='content__btn'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}