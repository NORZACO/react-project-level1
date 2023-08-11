import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS STYLE CASCADING
import './index.css';


// import { Car, Garage } from './component/index'
// import { Destructuring } from './component/Destructuring'
import Footer from './component/Footer'
import Header from './component/Header'
import RegistrationForm from './component/RegistrationForm'
// import Users from './component/Users';
import reportWebVitals from './reportWebVitals';
import FetchData from './component/FetchingData';
import { HeroSections } from './component/HeroSection';
// import Album from './component/Albums';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//   <React.StrictMode>
//     <Header />
//     <Album />
//     <HeroSection />
//     < Destructuring
//       library="React.js Essential Training Destructuring arrays and objects"
//       msg={msg}
//     />
//     <RegistrationForm />
//     <Car />
//     <Garage />
//     <FetchData />
//     {/* <Users /> */}
//     <Footer />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <Header library="React.js Essential Training Destructuring arrays and objects"/>
    < HeroSections />
    <FetchData />
    <RegistrationForm />
    <Footer />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




