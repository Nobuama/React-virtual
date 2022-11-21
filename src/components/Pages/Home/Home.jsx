import React from "react";
import { Footer, Header, Main } from "../../index";


export const Home = ({isUserLogged, handleUserAuth, deleteUser}) => {
   return (
   <div className="wrapper">
       <Header 
       isUserLogged={isUserLogged}
       handleUserAuth={handleUserAuth}
       deleteUser={deleteUser}
       />
       <Main/>
       <Footer/>
   </div>
 );}