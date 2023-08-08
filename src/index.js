import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS STYLE CASCADING
import './index.css';


import { Car, Garage } from './component/index'
import { Destructuring } from './component/Destructuring'
import Footer from './component/Footer'
import Header from './component/Header'
import RegistrationForm from './component/RegistrationForm'


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const msg = `Among all other JavaScript libraries, React.js stands out. It relies on reusable components, not templates, for UI development, allowing developers to render views where data changes over time. React applications are more scalable and more maintainable, making developers more efficient and users more satisfied. In this course, Eve Porcello introduces the basics of the React library using the most modern syntax and best practices for creating React components. Along the way, learn how to set up Chrome tools for React; create new components; work with the built-in Hooks in React; use the Create React App to run tests, and more. By the end of the course, you'll be armed with the essentials of React.js and better prepared to build your own browser-based projects.`

root.render(
  <React.StrictMode>
    <Header />
    < Destructuring
      library="React.js Essential Training Destructuring arrays and objects"
      msg={msg}
    />
    <RegistrationForm />
    <Car />
    <Garage />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
