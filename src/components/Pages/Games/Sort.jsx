import React from "react";

export const ContentMenu = ({openDialog, games, filter}) => {

  return(
    <div className="content__menu">
      <h2 className="content__title title">VR Games</h2>
      <div className="content__btn-block">
        <button 
        className="content__new-card button" 
        onClick={openDialog}>Add new card
        </button>
        {games.length > 0 &&
        <select className="content__popup" onChange={filter}>
          <option className="content__opt" value="newfirst">New first</option>
          <option className="content__opt" value="newlast">New last</option>
        </select>}
      </div>
    </div>
  );
}