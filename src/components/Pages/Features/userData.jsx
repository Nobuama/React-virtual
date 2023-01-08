import React, {useContext} from "react";
import { Person } from "../../../assets/images/images";
import { USERCOUNTRIES, USERROLES, getRandom } from "../../../assets/scripts/mock";

export const UserData = ({section, users}) => {
  let prop;
  switch (section) {
    case 'age':
      prop = getRandom(12, 90);
      break;
    case 'country': 
      prop = USERCOUNTRIES[getRandom(0, 3)];
      break;
    case 'role':
      prop = USERROLES[getRandom(0, 3)];
      break;
    case 'avatar':
      prop = <img src={Person} alt="" />;
    default:
      break;
  };
  
  return(
    <ul className="userData">
      {section}
      {users.map(user => (
        <li key={user.id}>{user[section] || prop}</li>
      ))}
    </ul>
  )
}