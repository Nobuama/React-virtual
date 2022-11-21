import React from "react";
import { Footer, Header } from "../../index";
import { MainFeatures } from "./mainFeatures";



export const Features = ({isUserLogged, handleUserAuth, deleteUser}) => {
   return (
   <div className="wrapper">
       <Header 
       isUserLogged={isUserLogged}
       handleUserAuth={handleUserAuth}
       deleteUser={deleteUser}
       />
       <MainFeatures/>
       <Footer/>
   </div>
 );}