import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Button } from "react-bootstrap";


const ToDoList = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <i
            className="bi bi-x-circle"
            aria-hidden="true"
            onClick={() => {
              props.onSelect(props.id);
            }}
          />
          <li>{props.text}</li>
        </div>
      </div>
    </>
  );
};



const HeroSection = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      console.log([...oldItems, inputList]);
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((_arrElem, index) => {
        return index !== id;
      });
    });
  };

  useEffect(() => {
    document.title = `You clicked ${items.length} times`;
  });

  return (
    <>
      <div className="border border-success p-2 mb-2">
        <div className="border border-primary">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
            value={inputList}
            required
          />
          <button onClick={listOfItems}> + </button>
          <ol className="border border-black">
            {/* <li>{inputList}</li> */}
            {items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
