import React from "react";
import { createPortal } from "react-dom";
import { PreviewDialogWrapper } from "./PreviewDialogWrapper";
import './previewDialog.css';

export const PreviewDialog = ({game, closeDialog}) => {
  const portalRoot = document.getElementById('portal');

  return createPortal(
    <PreviewDialogWrapper closeDialog={closeDialog}>
      <div className="item">
        <img src={game.img} alt="grid-item" className="item-img"/>
        <h3 className="item-header">{game.gameName}</h3>
        <p className="item-text">{game.gameDescription}</p>
        <div className="item__user">
           <img className="item__userPhoto" src={game.userPhoto} alt="userPhoto"/>
           <span className="item__userName">{game.userName}</span>
        </div>
        <p className="item-text">{game.userReview}</p>
     </div>
    </PreviewDialogWrapper>
  , portalRoot)
}