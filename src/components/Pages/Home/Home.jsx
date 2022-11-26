import React from "react";
import { Footer } from "../../footer";
import { Header } from "../../header";
import { Main } from "./index";


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