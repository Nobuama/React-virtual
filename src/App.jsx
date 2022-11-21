import React, {useState} from "react";
import { 
  currentUser, 
  readLocalStorage,
  delLocalStorage,
  Home,
  Games,
  Features} from "./components";
import {Routes, Route} from "react-router-dom";


  
const App = () => {
  const verifyUser = () => {
    if (readLocalStorage("currentUser")) {
      let user = readLocalStorage("currentUser");
      currentUser.userAuth = user.userAuth;
      currentUser.username = user.username;
      currentUser.password = user.password;
      currentUser.userPhoto = user.userPhoto;
      return true;
    }
      return false;
  };

  const [isUserLogged, setIsUserLogged] = useState(verifyUser);
  
  const handleUserAuth = () => {
    console.log('click');
    setIsUserLogged(true);
  };
  const handleUserNoAuth = () => {
    delLocalStorage("currentUser");
    setIsUserLogged(false);
  };
  
  return (
    <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home  
          handleUserAuth={handleUserAuth}
          isUserLogged={isUserLogged}
          deleteUser={handleUserNoAuth}
          />}/>
          <Route path="/Games" element={<Games 
          handleUserAuth={handleUserAuth}
          isUserLogged={isUserLogged}
          deleteUser={handleUserNoAuth}
          />}/>
          <Route path="/Features" element={<Features 
          handleUserAuth={handleUserAuth}
          isUserLogged={isUserLogged}
          deleteUser={handleUserNoAuth}
          />}/>
        </Routes>
    </div>
  )}

export default App;
