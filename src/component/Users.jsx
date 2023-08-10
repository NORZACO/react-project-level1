// import React, { useState, useEffect } from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const URL = "http://127.0.0.1:8000/api/v1/users";

// // TODO : LR-1calling express api
// export default function Users() {
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const abortController = new AbortController(); // Define the abortController here

//     async function getData() {
//       try {
//         const response = await fetch(URL, { signal: abortController.signal });
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         if (abortController.signal.aborted) {
//           // Exit early if this fetch was aborted
//           return;
//         }
//         const data = await response.json();
//         setResults(data.data);
//       } catch (error) {
//         if (error.name !== "AbortError") {
//           console.error("An unknown error occurred:", error);
//         }
//       }
//     }

//     getData();
//     console.log(results, "useEffect");

//     return () => {
//       abortController.abort(); // Abort the fetch when the component is unmounted
//     };
//   }, [results]); // Dependency array

//   console.log(results, "outside useEffect");
//   return (
//     <div>
//       {results.map((item) => {
//         const { userId, username, email, avatar, password, birthdate, registeredAt, lastLogin, } = item;
//         return (
//           <div key={userId}>
//             <h3> {username} </h3>
//             <p> {email} </p>
//             <p> {avatar} </p>
//             <p> {password} </p>
//             <p> {birthdate} </p>
//             <p> {registeredAt} </p>
//             <p> {lastLogin} </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// // const results: never[] | undefined;
