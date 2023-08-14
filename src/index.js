import React from 'react';
import ReactDOM from 'react-dom/client';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// CSS STYLE CASCADING
import './index.css';


import Footer from './component/Footer'
// import Header from './component/Header'
// import RegistrationForm from './component/RegistrationForm'
// import Users from './component/Users';
// import reportWebVitals from './reportWebVitals';
// import FetchData from './component/FetchingData';
// import { HeroSections } from './component/HeroSection';
import  App  from './App';
// import FetchLiftData from './component/Moonhighway';
// import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <Header library="React.js Essential Training Destructuring arrays and objects"/> */}
    {/* < HeroSections /> */}
    {/* <FetchData /> */}
    {/* <FetchLiftData /> */}
    {/* <RegistrationForm /> */}
    <App />
    {/* < HeroSections /> */}
    <Footer />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();






