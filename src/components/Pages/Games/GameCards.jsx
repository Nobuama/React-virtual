import React from "react";
import { CARDS } from "../../../assets/scripts/localStorage";

export const GameCards = ({currentItems}) =>{
  
  return(
    <ul className="content__items">
      {currentItems.map((card)=> (
          <li key={card.id} id={card.id} className="content__item">
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
    </ul>
  )
}