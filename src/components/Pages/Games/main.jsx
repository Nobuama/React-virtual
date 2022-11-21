import React, {useState} from "react";
import { CARDS } from "../../../assets/scripts/localStorage";
import { AddNewCardDialog } from "../../Dialogs/AddNewCardDialog";
import { GameCards } from "./GameCards";

export const Main = ({isUserLogged, currentItems}) => {
    const [isAddNewCardDialogVisible, setAddNewCardDialogVisible] = useState(false);
    
    const handleOpenAddNewCardDialog = () => {
        if(isUserLogged) setAddNewCardDialogVisible(true);
    };
 
    const handleCloseAddnewCardDialog = () => { 
        setAddNewCardDialogVisible(false);
    };
 
    return( 
      <section className="mainGames">
          <div className="content__menu">
              <h2 className="content__title title">VR Games</h2>
              <div className="content__btn-block">
                <button className="content__new-card button" onClick={handleOpenAddNewCardDialog}>Add new card</button>
              </div>
          </div>
          {CARDS.length ? <GameCards currentItems={currentItems}/> : null}
          <ul className="content__nav">
          </ul>
          {isAddNewCardDialogVisible && (
              <AddNewCardDialog closeDialog={handleCloseAddnewCardDialog}/>)}
      </section>
    );
}