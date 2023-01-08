import { PEOPLE } from "./hero-people";

export const PeopleOnline = () => {
   return(
   <div className="hero__cards">
      <ul className="hero__people">
         {PEOPLE.map((person) => {
            return(
               <li key={person.id} className="hero__card">
                  <img src={person.img} alt={person.alt} className="hero__person"/>
               </li>
            );
         })}
      </ul>
      <span className="hero__online">400k people online</span>
   </div>
   );
}