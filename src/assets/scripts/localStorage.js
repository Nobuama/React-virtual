import * as Mock from "./mock";

export const readLocalStorage=(name)=>{
   const user= JSON.parse(localStorage.getItem(name));
   return user;
};

export const writeLocalStorage=(userData, name)=>{
 localStorage.setItem(name, JSON.stringify(userData));
};

export const delLocalStorage=(name)=>{
   localStorage.removeItem(name);
};
 