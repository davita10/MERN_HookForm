import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [state, setState] = useState(0);

  // const person = {
  //   firstName: "Jane",
  //   lastName: "Doe",
  //   age: 35,
  //   hairColor: "Black",
  // };

  const people = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 35,
      hairColor: "Silver",
    },
    {
      firstName: "Jack",
      lastName: "Ryan",
      age: 54,
      hairColor: "Black",
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 28,
      hairColor: "Brown",
    },
    {
      firstName: "Joe",
      lastName: "Dirt",
      age: 62,
      hairColor: "Dirty",
    },
  ];

  return (
    <div className="App">
      <h6>Hello There Sunshine!</h6>

      {/* accessing Values from person object (one person)*/}
      {/* <PersonCard person={person} number={state} /> */}

      {/* accessing Values from multi person object in array peopleArr.map */}

      <Form />

      {/* .map higher-order function in js glorified forLoop for Arrays - expects callback function to run ()=>{} */}
      {people.map((person, index) => {
        return (
          <PersonCard
            key={index}
            firstName={person.firstName}
            lastName={person.lastName}
            age={person.age}
            hairColor={person.hairColor}
          />
        );
      })}
    </div>
  );
}

export default App;
