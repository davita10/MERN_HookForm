// importing the useState hook (function)
import { useState } from "react";

const PersonCard = (props) => {
  // destructuring
  const { firstName, lastName, age, hairColor } = props;
  // getters and setters

  const [state, setState] = useState(20);

  //   const deleteHandler = () => {
  //     const newList = people.filter((p) => p.id !== id);
  //     setPeople(newList);
  //   };

  //   const changeAge = () => {
  //     const newAge = Math.floor(Math.random() * 100);
  //     const newPeople = people.map((p) => {
  //       if (p.id === id) {
  //         const updatedPerson = { ...p, age: newAge };
  //         return updatedPerson;
  //       }
  //       return p;
  //     });
  //     setPeople(newPeople);
  //   };

  return (
    <div className="border bg-secondary m-5 p-4">
      <h1>First Name: {firstName}</h1>
      <h1>Last Name: {lastName} </h1>
      <h2>Age:{state} </h2>
      <h2>Hair Color: {hairColor} </h2>
      {/* synthetic event */}
      <button onClick={() => setState(state + 1)}>
        Birthday Button for {firstName}
      </button>
      {/* <button className="btn btn-danger" onClick={deleteHandler}>
        Delete
      </button>
      <button className="btn btn-info" onClick={changeAge}>
        Change Age
      </button> */}
    </div>
  );
};

export default PersonCard;
