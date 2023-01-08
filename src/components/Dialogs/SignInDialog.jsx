import React from "react";
import { CreateOverlay } from "./DialogOverlay";
import { createPortal } from "react-dom";
import {currentUser, userData, writeLocalStorage} from "../index";
import '../Dialogs/dialog.css';


export const SignInDialog = ({closeDialog, handleUserAuth}) => {
  const portalRoot = document.getElementById("portal");
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState("");

  const handleSubmitSignInDialog = (e) => {
    e.preventDefault();
    // let user = readLocalStorage("virtualUser");

    userData.forEach((user)=>{
      if((email===user.userLogin)&&(password===user.userPsw)){
        currentUser.userAuth=true;
        currentUser.userName=user.userLogin;
        currentUser.userPassword=user.userPsw;
        currentUser.userPhoto=user.userPhoto;
        writeLocalStorage(currentUser,"currentUser");
        handleUserAuth();
     }
    });

    closeDialog();
    console.log({ email, password });
  };

  return createPortal (
    <CreateOverlay closeDialog={closeDialog} title="Authorization">
      <form className="modal__form" onSubmit={handleSubmitSignInDialog}>
        <legend className="modal__legend">Sign in</legend>
        <input className="sign-in__email" name="userName" onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email or username" required/>
        <input className="sign-in__password" name="userPassword" onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required/>
        <button type="submit" className="modal__btn">Sign in</button>
      </form>
    </CreateOverlay>
  , portalRoot);
}