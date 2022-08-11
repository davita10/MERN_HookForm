import { useState } from "react";
import { nanoid } from "nanoid";

const Form = (props) => {
  // destructure out of props from App.js and give Form component access to setPeople(function)below, ([...people,personObj]) appends personObj to people Arr[] which allows .map() to traverse Arr
  const { people, setPeople } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [hairColor, setHairColor] = useState("");

  const submitHandler = (e) => {
    // never want to refresh page in react and lose state so
    e.preventDefault();
    if (firstName && lastName && age && hairColor) {
      console.log({
        firstName,
        lastName,
        age,
        hairColor,
      });
      const personObj = {
        id: nanoid(),
        firstName,
        lastName,
        age,
        hairColor,
      };
      // ([...people,personObj]) appends personObj to people Arr[...people] which allows .map() to traverse Arr
      setPeople([...people, personObj]);
      // this function setPeople() still relates to useState() function in App.js [people,setPeople]
    }
    // below resets state
    setFirstName("");
    setLastName("");
    setAge(0);
    setHairColor("");
  };

  return (
    <form onSubmit={submitHandler} className=" border rounded bg-info">
      {/* onSubmit={submitHandler} connects to const submitHandler and activates */}
      <div className="form-group mb-3">
        <label className="form-label">First Name:</label>
        {/* add synthetic event with anonymous function ()=>{} andThe Event Object e */}
        {/* e.target.value stores in State */}
        <input
          type="text"
          className="form-control"
          value={firstName}
          //   value={prop} resets form to clear state
          onChange={(e) => {
            console.log("This is the event object: ", e);
            console.log("This is e.target: ", e.target);
            console.log(e.target.value);

            setFirstName(e.target.value);
          }}
        />
        {/* Ternery Operators for setting Validations */}
        {firstName && firstName.length < 3 ? (
          <p>Name must be longer than 3 characters!</p>
        ) : null}
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Last Name:</label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Age:</label>
        <input
          type="number"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Hair Color:</label>
        <input
          type="text"
          className="form-control"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <button className="btn btn-outline-danger">Add Person</button>
      </div>
    </form>
  );
};

export default Form;
