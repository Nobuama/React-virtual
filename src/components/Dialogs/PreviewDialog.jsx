import React, {useState} from "react";
import { createPortal } from "react-dom";
import { CARDS } from "../../assets/scripts/localStorage";

export const PreviewDialog = (game) => {


  const portalRoot = document.getElementById('portal')
  


  return createPortal(
    <div class="modal-wrapper">
         <div class="item">
            <img src={game.img} alt="grid-item" class="item-img"/>
            <h3 class="item-header">{game.gameName}</h3>
            <p class="item-text">{game.gameDescription}</p>
            <div class="item__user">
               <img class="item__userPhoto" src={game.userPhoto} alt="userPhoto"/>
               <span class="item__userName">{game.userName}</span>
            </div>
            <p class="item-text">{game.userReview}</p>
         </div>
      </div>
  ,portalRoot)
}