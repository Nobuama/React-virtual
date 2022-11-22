import React, {useState} from "react";
import { CARDS } from "../../../assets/scripts/localStorage";
import { AddNewCardDialog } from "../../Dialogs/AddNewCardDialog";
import { GameCards } from "./GameCards";
import { ContentMenu } from "./Sort";

export const Main = ({isUserLogged, currentItems, filter}) => {
    const [isAddNewCardDialogVisible, setAddNewCardDialogVisible] = useState(false);
    
    const handleOpenAddNewCardDialog = () => {
        if(isUserLogged) setAddNewCardDialogVisible(true);
    };
 
    const handleCloseAddnewCardDialog = () => { 
        setAddNewCardDialogVisible(false);
    };
 
    return( 
      <section className="mainGames">
          <ContentMenu openDialog={handleOpenAddNewCardDialog} filter={filter}/>
          {CARDS.length ? <GameCards currentItems={currentItems}/> : null}
          {isAddNewCardDialogVisible && (
              <AddNewCardDialog closeDialog={handleCloseAddnewCardDialog}/>)}
      </section>
    );
}