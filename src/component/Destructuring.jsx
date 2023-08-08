import "../static/css/index.css";
// import bootstrat
import "bootstrap/dist/css/bootstrap.min.css";

import "../static/css/App.css";
import "../static/css/destructuring.css";
import "../static/css/countries.css";

// import "../static/sass/App.scss";
import "../static/sass/index.scss";

import { countries } from "../data/countries"; // countries
import { topNatureCountries } from "../data/topNatureCountries"; //

// import bootstrap
import { useEffect, useState } from "react";

// Destructuring Array
const [firstCountry, secondCountry, thirdCountry] = countries;
console.log(firstCountry, secondCountry, thirdCountry);

// Destructuring Array using index number
const [, , , fourthCountry] = countries;
console.log(fourthCountry);

// Destructuring Object
const { name, code } = firstCountry;
console.log(name, code);

// Destructuring Object with rest operator
const { name: countryName, ...rest } = firstCountry;
console.log(countryName, rest);

// topNatureCountries
const [firstNatureCountry, secondNatureCountry, thirdNatureCountry] =
  topNatureCountries;
console.log(firstNatureCountry, secondNatureCountry, thirdNatureCountry);

const allColors = [
  "border-primary",
  "border-secondary",
  "border-success",
  "border-danger",
  "border-warning",
  "border-info",
  "border-light",
  "border-dark",
  "border-white",
  "text-bg-dark p-3",
  "text-primary p-3",
  "text-secondary p-3",
  "text-success p-3",
  "text-danger p-3",
  "text-warning p-3",
  "text-info p-3",
  "text-light p-3",
];

// get random color
const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
console.log(randomColor);

// get a color every time function is called
const getRandomColor = () => {
  const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
  return randomColor;
};

// console.log(getRandomColor());

// Before
function Destruct(props) {
  return (
    <div className="destructuring">
      <h1> React.js Essential Training || {props.library} </h1> |
      <hr /> <br />
      <p> {props.message} </p>
    </div>
  );
}

// After
function Destructuring({ library, message }) {
  const [getactivev1, setActivev1] = useState(`changeBackgoundv1`);
  const [geactivev2, setActivev2] = useState(getRandomColor);
  // const [geactivev3, setActivev3] = useState(`changeBackgoundv3`);
  // const [geactivev4, setActivev4] = useState(`changeBackgoundv4`);
  // const [geactivev5, setActivev5] = useState(`changeBackgoundv5`);
  // const [geactivev6, setActivev6] = useState(`changeBackgoundv6`);

  useEffect(() => {
    const msg = `${getactivev1}`;
    console.log(msg);
  });

  useEffect(() => {
    const msg = `${geactivev2}`;
    console.log(msg);
  });

  return (
    <>
      <div className="destructuring">
        <h1> {library} </h1>
        <hr /> <br />
        <p> {message} </p>
      </div>

      <div className="destructurings">
        {/* table */}
        <table
          className={`table table-bordered  ${geactivev2}`}
          onClick={() => setActivev2(getRandomColor())}
        >
          <thead>
            <tr className="country">
              <th> id </th>
              <th> Country </th>
              <th> continent </th>
              <th> keyFeatures </th>
              <th> famousPlaces </th>
              <th> biodiversity </th>
              <th> tourismInfo </th>
              <th> image </th>
            </tr>
          </thead>
          <tbody>
            {topNatureCountries.map((country) => (
              <tr
                key={country.id}
                className={getactivev1}
                onClick={() => setActivev1(getRandomColor())}
              >
                <td> {country.id} </td>
                <td> {country.name} </td>
                <td> {country.continent} </td>
                <td> {country.keyFeatures} </td>
                <td> {country.famousPlaces} </td>
                <td> {country.biodiversity} </td>
                <td> {country.tourismInfo} </td>
                <td>
                  <img
                    src={country.image}
                    alt={country.name}
                    height={100}
                    width={100}
                    // srcset="x"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr /> <br />
      </div>
    </>
  );
}

// export Destruct and Destructuring
export { Destruct, Destructuring };
