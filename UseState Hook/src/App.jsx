import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(5);

  const handleInc = () => {
    if (count >= 20) {
      alert("Max limit 20");
    } else {
      setCount((count += 1));
    }
    // setCount(count += 1)          //guess the output here the output is 9 because here count = count + 1 means add 1 in the previous value of count
    // setCount(count += 1)
    // setCount(count += 1)
  };

  const handleDrc = () => {
    if(count <= 0){
      alert("Min limit is 0")
    }else{

      setCount((count -= 1));
    }
  };

  return (
    <>
      <h1>
        The Counter is: <span className="count">{count}</span>
      </h1>

      <button onClick={handleInc} className="Inc">
        Increment the value
      </button>
      <button onClick={handleDrc} className="Drc">
        Decrement the value
      </button>
    </>
  );
}

export default App;
