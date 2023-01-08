import React, {useCallback, useState} from "react";
import { AddNewCardDialog } from "../../Dialogs/AddNewCardDialog";
import { GameCards } from "./GameCards";
import { ContentMenu } from "./Sort";
import { readLocalStorage, writeLocalStorage } from "../../../assets/scripts/localStorage";

let itemOffset = 0;
let endOffset;
const minItemsPerPage = 3, maxItemsPerPage = 9;

export const Main = ({isUserLogged}) => {
  if(!readLocalStorage("Games")) writeLocalStorage([], "Games");
  const [itemsPerPage, setItemsPerPage] = useState(maxItemsPerPage);
  const [games, setGames] = useState(readLocalStorage("Games"));
  const [currentItems, setCurrentItems] = useState(games.slice(itemOffset, endOffset));
  const [pageCount, setPageCount] = useState(games.length ? Math.ceil(games.length / itemsPerPage) : 0);
  const [mobileState, setMobileState] = useState(window.innerWidth <= 450);
  endOffset = itemOffset + itemsPerPage;
  const [isAddNewCardDialogVisible, setAddNewCardDialogVisible] = useState(false);

  const sortItems = useCallback((e) => {
    switch (e.target.value) {
        case "newfirst":
          setCurrentItems([...games.sort((a, b) => b.createdAt - a.createdAt)]);
          break;
        case "newlast":
          setCurrentItems([...games.sort((a, b) => a.createdAt - b.createdAt)]);
          break;
        default:
          return currentItems;
    }
  }, [games, currentItems]);

  const handlePageClick = (event) => {
    itemOffset = (event.selected * itemsPerPage) % games.length;
    endOffset = itemOffset + itemsPerPage;
    setCurrentItems(games.slice(itemOffset, endOffset));
  };
  
  React.useEffect(
    () => {
      const handleResize = () => {
        if (window.innerWidth <= 450) {
          setItemsPerPage(minItemsPerPage);
        }
        if (window.innerWidth > 450) {
          setItemsPerPage(maxItemsPerPage);
        }
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      setCurrentItems(games.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(games.length / itemsPerPage));

      return () => window.removeEventListener("resize", handleResize);
    },
    [itemsPerPage, games],
  );

  const handleOpenAddNewCardDialog = () => {
      if(isUserLogged) setAddNewCardDialogVisible(true);
  };

  const handleCloseAddnewCardDialog = () => { 
      setAddNewCardDialogVisible(false);
  };

  return( 
    <section className="mainGames">
        <ContentMenu 
        openDialog={handleOpenAddNewCardDialog} 
        games={games} 
        filter={sortItems}/>
        
        {games.length ? 
        <GameCards 
        currentItems={currentItems}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
        itemsPerPage={itemsPerPage}
        /> : 
        <>
          <ul className="content__items">
            <h2 className="noCards">Empty Cards</h2>
          </ul>
          <ul></ul>
        </>
        }

        {isAddNewCardDialogVisible && (
        <AddNewCardDialog 
        closeDialog={handleCloseAddnewCardDialog} 
        games={games}
        currentItems={currentItems}
        setCurrentItems={setCurrentItems}
        setPageCount={setPageCount}
        itemsPerPage={itemsPerPage}
        itemOffset={itemOffset}
        endOffset={endOffset}
        />)}
    </section>
  );
}