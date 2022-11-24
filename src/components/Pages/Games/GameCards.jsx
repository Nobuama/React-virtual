import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { PreviewDialog } from "../../Dialogs/PreviewDialog";

export const GameCards = ({currentItems, pageCount, handlePageClick}) =>{
  const findOneById = (e) => {
    return currentItems.find((item) => item.id === e.currentTarget.id );
  };
  const [game, setGame] = useState("");
  const [isPreviewDialogOpen, setIsPreviewDalogOpen] = useState(false);
  const handleOpenPreviewDialog = (e) => {
    setIsPreviewDalogOpen(true);
    setGame(findOneById(e))
  };
  const handleClosePreviewDialog = () => {
    setIsPreviewDalogOpen(false);
  };
  return(
    <>
    <ul className="content__items">
      {currentItems.map((card)=> (
          <li key={card.id} id={card.id} className="content__item" onClick={handleOpenPreviewDialog}>
          <img src={card.img} alt={card.gameName} className="content__img"/>
          <div className="content__decsription">
            <div className="content__name">
                <h3 className="content__card-name title">{card.gameName}</h3>
                <p className="content__properties text">{card.gameDescription}</p>
            </div>
            <div className="content__review">
                <h3 className="content__card-name title">{card.userName}</h3>
                <p className="content__properties text">{card.userReview}</p>
            </div>
          </div>
      </li>
        ))
      }
      {isPreviewDialogOpen && <PreviewDialog 
      closeDialog={handleClosePreviewDialog}
      game={game}
      />}
    </ul>
    
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
      />
    </>
  )
}