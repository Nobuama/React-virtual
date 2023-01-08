import { json } from "react-router-dom";
import { Person, Person2, Person3 } from "../images/images";
const userName = 'userName';
const userReview = 'worlds focused on social connection';

export const USERCOUNTRIES = ['Poland', 'Ukraine', 'US'];
export const USERROLES = ['admin', 'moderator', 'user']
export const getRandom = (min, max) => Math.trunc(Math.random() * (max - min) + min);

export const userData = [{
   userLogin: "dennyhilguston",
   userPsw: "1",
   userPhoto: Person,
},
{
   userLogin: "millysingh",
   userPsw: "1",
   userPhoto: Person2,
},
{
   userLogin: "Bohdan",
   userPsw: "1",
   userPhoto: Person3,
   
},];
export const currentUser = {};
export const userCARDS = [];


export const FEEDBACK = [
   {
      name: 'Denny Hilguston',
      nickName:'@denny.hill',
      img:'src/assets/images/person.png',
      comment:'“I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!”',
   },
   {
      name: 'Denny Hilguston',
      nickName:'@denny.hill',
      img:'src/assets/images/person.png',
      comment:'“I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!”',
   },{
      name: 'Denny Hilguston',
      nickName:'@denny.hill',
      img:'src/assets/images/person.png',
      comment:'“I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!”',
   },
];