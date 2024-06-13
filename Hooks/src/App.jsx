import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  // let counter = 5    // in react we dont make variable like this
  let [counter, setCounter] = useState(100)

  let handleClick = ()=>{
    if(counter >= 2000){
      alert("Cant exceed from 2000. Max limit 2000")
      }
      else{
      setCounter(counter +=100) 
    }
    // document.querySelector('.count').innerHTML = counter   //not good practice in react 
    } 
    
    const handleDecrement = ()=>{
      if(counter <= 0 ){
        alert("Cant Decrease from 0. Minimum limit 0")
        }
        else{
        setCounter(counter -=100) 
      }
      // document.querySelector('.count').innerHTML = counter   //not good practice in react 
  }

  return (
    <>
      <div className="container">
        <h1>Counter Value: <span className="count">{counter}</span></h1>
        <button className="Inc" onClick={handleClick}>Increment Value</button>
        <button onClick={handleDecrement}>Decreament Value</button>
      </div>
    </>
  );
}

export default App;
