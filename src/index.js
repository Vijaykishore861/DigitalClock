import React from "react";
import ReactDOM from "react-dom"
import DigitalClock from "./componants/DigitalClock";
import "./design/input.css"




const App = ()=>{
  
  return (
    <div className="app">
     <DigitalClock></DigitalClock>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)