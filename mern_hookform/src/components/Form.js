import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [hairColor, setHairColor] = useState("");

  const submitHandler = (e) => {
    // never want to refresh page in react so
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      age,
      hairColor,
    });
    // below resets state
    setFirstName("");
    setLastName("");
    setAge(0);
    setHairColor("");
  };

  return (
    <form onSubmit={submitHandler} className=" border ">
      {/* onSubmit={submitHandler} connects to const submitHandler and activates */}
      <div className="form-group mb-3">
        <label>First Name:</label>
        {/* add synthetic event with anonymous function ()=>{} andThe Event Object e */}
        {/* e.target.value stores in State */}
        <input
          type="text"
          value={firstName}
          //   value={prop} resets form to clear state
          onChange={(e) => {
            console.log("This is the event object: ", e);
            console.log("This is e.target: ", e.target);
            console.log(e.target.value);

            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="form-group mb-3">
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label>Hair Color:</label>
        <input
          type="text"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <button>Add Person</button>
      </div>
    </form>
  );
};

export default Form;
