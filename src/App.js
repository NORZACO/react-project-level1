import './App.css';
import './Greeting.css';
import { useState, useEffect } from "react";
import { USERS } from './userGenerater';

const [first_person] = USERS;
console.log(first_person);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [users, SetUser] = useState(USERS); // You can set the initial state to the USERS array directly
  const [emotion, SetEmotion] = useState("likes"); // Corrected the spelling of "EXCITING"
  const [secondary, setSecondary] = useState("Rainy");
  const [changecolor, changeColor] = useState("defaultColor");


  // useEffect to log the emotion whenever it changes
  useEffect(() => {
    console.log(`She is feeling ${emotion}`);
  }, [emotion]);


  // useEffect to log the secondary whenever it changes
  useEffect(() => {
    console.log(`The weather today is  ${secondary} `);
  }, [secondary]);

  // useEffect to log the changecolor whenever it changes
  useEffect(() => {
    console.log(`The backgound color ${changecolor} have been succesfully chnaged`);
  }, [changecolor, emotion]);





  return (
    /* map first_person */
    <div className="MainDiv">
      <div className={changecolor}>
        <h1>{emotion}</h1>
        {users.map((user) => (
          <div key={user.userId} className="userId">

            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Birthdate: {user.birthdate.toString()}</p>
            <p>Registered At: {user.registeredAt.toString()}</p>
            <p>Feeling: {emotion}</p>
            <p>Weather: {secondary}</p>

            <div>
              <img src={user.avatar} alt='welcome' height="100" />
              <button onClick={() => { console.log("clicked"); alert(`Hello ${user.avatar}`); }}>POPUP</button>
              <button onClick={() => { console.log("clicked"); SetEmotion(`Hello ${user.username}`); }}> Change name </button>
              <button onClick={() => { console.log("clicked2"); setSecondary(`Hello Awesome`); }}> Feeling Awesome </button>
              <button onClick={() => { console.log("clicked2"); changeColor(`changeColor`); }}> changeColor </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
