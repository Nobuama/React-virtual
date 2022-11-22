import React from 'react';
import ReactPaginate from 'react-paginate';
import { CARDS } from '../../../assets/scripts/localStorage';

export const PaginatedItems = ({itemsPerPage, pageCount, setItemOffset, games}) =>{
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % games.length;
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
        renderOnZeroPageCount={null}
        initialPage={0}
      />
    </>
  );
}