import React, { useState } from "react";
import { PreviewDialog } from "../../Dialogs/PreviewDialog";


export const GameCards = ({currentItems}) =>{
  const findOneById = (e) => {
    return currentItems.find((item) => item.id === e.currentTarget.id );
  };
  const [game, setGame] = useState("");
  const [isPreviewDialogOpen, setIsPreviewDalogOpen] = useState(false);
  const handleOpenPreviewDialog = (e) => {
    setIsPreviewDalogOpen(true);
    setGame(findOneById(e))  };
  const handleClosePreviewDialog = () => {
    setIsPreviewDalogOpen(false);
  }

  return(
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
  )
}