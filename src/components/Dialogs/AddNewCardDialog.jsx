import React from 'react';
import { createPortal } from 'react-dom';
import { currentUser } from '../../assets/scripts/mock';
import { CreateOverlay } from './DialogOverlay';
import {DialogInputs} from './inputs';
import { CARDS, readLocalStorage } from '../../assets/scripts/localStorage';
import { writeLocalStorage } from '../../assets/scripts/localStorage';
import './dialog.css';


export const AddNewCardDialog = ({closeDialog}) => {
  const portalRoot = document.getElementById('portal');

  const getValuesFromCard = (form) => {   
    let newMap = new Map();
    for (let element of form.elements) {
       newMap.set(element.name, element.value);
    };
    newMap.delete('');
    let Obj;
    Obj = Object.fromEntries(newMap);
    Obj.createdAt = Date.now();
    Obj.id = Date.now().toString(36);
    Obj.userName = currentUser.userName;
    Obj.userPhoto = currentUser.userPhoto;
    return Obj;
 };

 const handleSubmitAddCardForm = (event) => {
  const newCardForm = document.forms.newCard;
  event.preventDefault();
  const formValues = getValuesFromCard(newCardForm);

  CARDS.push(formValues);
  console.log(CARDS);
  writeLocalStorage(CARDS, 'Games');
  closeDialog();
};


  return createPortal (
    <CreateOverlay title="Realities cards" closeDialog={closeDialog}>
      <form className="modal__form" name="newCard" onSubmit={handleSubmitAddCardForm}>
        {DialogInputs.map((input)=>{
          return(
            <input 
            key={input.id}
            className="new-card__inp" 
            name={input.name} 
            placeholder={input.placeholder}
            />
          )
        })}
        <button className="modal__btn">Add</button>
      </form>
    </CreateOverlay>
  , portalRoot);
};
