import './App.css';
import { useState, useEffect } from "react";
import { USERS } from './userGenerater'

const [first_person] = USERS

console.log(first_person);

function App() {

  // eslint-disable-next-line no-unused-vars
  const [users, SetUser] = useState('USERS')
  const [ emotion, SetEmotion ] = useState("EXICTING ")

  // useEffect
  useEffect(() => { console.log(`It was a very ${emotion} Film`)})

  return (
    /* map first_person */
    <div className="App">
      <div>
      <h1> {emotion } </h1>
        {USERS.map((user) => (
          <div key={user.userId}>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Image: {user.avatar}</p>
             <img src={ user.avatar } alt='welcome' height="100"/>
             <button onClick={()=>{ console.log("clicked"); alert(`Hello ${user.avatar}`);}}> POPUP </button>
             <button onClick={()=>{ console.log("clicked"); SetEmotion(`Hello ${user.username}`)}}> CHANGE HEAD </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
