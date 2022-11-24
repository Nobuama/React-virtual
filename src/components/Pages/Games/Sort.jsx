import React from "react";
import { CARDS } from "../../../assets/scripts/localStorage";

export const ContentMenu = ({openDialog, filter}) => {

  return(
    <div className="content__menu">
      <h2 className="content__title title">VR Games</h2>
      <div className="content__btn-block">
        {/* {CARDS.length > 0 &&
        <select className="content__popup" onChange={filter}>
          <option value="newfirst">New first</option>
          <option value="newlast">New last</option>
        </select>} */}
        <button 
        className="content__new-card button" 
        onClick={openDialog}>Add new card
        </button>
      </div>
    </div>
  );
}