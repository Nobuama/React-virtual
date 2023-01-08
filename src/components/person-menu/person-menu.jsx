import React from "react";

export const PersonMenu = ({deleteUser, closeMenu}) => {
   const logOut = () => {
      deleteUser();
      closeMenu();
   };

   return (
  
      <ul className="person__menu" >
         <li>
            <h4>User menu</h4>
            {/* <img src={PersonMenu} alt=""/> */}
         </li>
         <li>Recently added</li>
         <li>Add new card</li>
         <li onClick={logOut} >Log out</li>
      </ul>
   
   );
}
