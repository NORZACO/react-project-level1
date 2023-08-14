import React from 'react';
import ReactDOM from 'react-dom/client';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';

// CSS STYLE CASCADING
import './index.css';

import Footer from './component/Footer'
import Header from './component/Header'
import RegistrationForm from './component/RegistrationForm'
import reportWebVitals from './reportWebVitals';
import FetchData from './component/FetchingData';
import { HeroSections } from './component/HeroSection';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header library="React.js Essential Training Destructuring arrays and objects"/>
    < HeroSections />
    <FetchData />
    {/* <FetchLiftData /> */}
    <RegistrationForm />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();






