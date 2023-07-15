
import React, {useState ,useEffect} from "react"
import ReactDOM from "react-dom/client"
import App from "./App";
import './index.css'
// funtion for usestate hook
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <div className="hooks">
      <h3>My favorite color is {color}!</h3>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >click</button>
    </div>
  );
}

//  function for useeffect hooks

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); 

  return (
    <div className="calculation">
      <p className="p1" >Count: {count}</p>
      <button className="increment" onClick={() => setCount((c) => c + 1)}>+</button>
      <p className="p2">Calculation: {calculation}</p>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <FavoriteColor/>
    <Counter/>
  </React.StrictMode>,
)
