import './App.css';
import './Greeting.css';
import { useState, useReducer, useEffect, useRef } from "react";
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


  const [checked, setChecked] = useState(false)
  const [marked, setMarked] = useReducer(marked => !marked, false)



  // form

  const txtTitle = useRef();
  const hexColor = useRef();

  // log txtTitle

    console.log(txtTitle);
    console.log(hexColor);



  const submit = (event) => {
    event.preventDefault();
    // console.log(event.target.color.value);
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    console.log(title, color);
    // alert tltle color
    alert(`${title} ${color}`);

    hexColor.current.value = "";
    txtTitle.current.value = "";
    }



  return (
    /* map first_person */
    <div className="MainDiv">
      <div className={changecolor} style={{
        color: "red",
        textAlign: "center",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        width: "fit-content",
        height: "fit-content",


      }}>
        <h1 style={{ textAlign: "center" }}>{emotion}</h1>
        {users.map((user) => (


          <div key={user.userId} className="userId">
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Birthdate: {user.birthdate.toString()}</p>
            <p>Registered At: {user.registeredAt.toString()}</p>
            <p>Feeling: {emotion}</p>
            <p>Weather: {secondary}</p>

            <div className='buttonBox' style={{
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
              padding: "100px",
              margin: "10px",
              borderRadius: "10px",
              width: "fit-content",
              height: "fit-content",
              display: "flex",
              // flexDirection: "column",
            }}>
              <img src={user.avatar} alt='welcome' height="100" />
              <button onClick={() => { console.log("clicked"); alert(`Hello ${user.avatar}`); }}>POPUP</button>
              <button onClick={() => { console.log("clicked"); SetEmotion(`Hello ${user.username}`); }}> Change name </button>
              <button onClick={() => { console.log("clicked2"); setSecondary(`Hello Awesome`); }}> Feeling Awesome </button>
              <button onClick={() => { console.log("clicked2"); changeColor(`changeColor`); }}> changeColor </button>
            </div>
          </div>
        ))}
        <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
        <p>{checked ? "checked" : "not checked"}</p>

        <input type="checkbox" value={marked} onChange={setMarked} />
        <p>{marked ? "marked" : "not marked"}</p> <hr></hr>


        <h1>Form</h1>
        <form onSubmit={submit}>
            <input 
            type="text" 
            ref={ txtTitle } placeholder="color title" 
            />

            <input ref={ hexColor } type="color" />
            <button>ADD</button>
        </form>

      </div>
    </div>
  );
}

export default App;
