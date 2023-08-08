import React from "react";
import "../static/sass/carGarage.scss";

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
    this.state.wheel = "wheel";
  }
  render() {
    return (
      <h2 style={{ color: this.state.color, textAlign: "center" }}>
        I am a {this.state.color} Car!
      </h2>
    );
  }
}

function Garage() {
  return (
    <>
      <h1 className="garage"> Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

export { Car, Garage };
