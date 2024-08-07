import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] =useState(15)
  // let counter = 15
  const addvalue=()=>{
    // console.log("value added", Math.random());
    console.log("value added", counter);
    // counter=counter+1;
    setCounter(counter +1)

  }
  const removevalue=()=>{
    // console.log("value added", Math.random());
    console.log("value remove", counter);
    // counter=counter+1;
    setCounter(counter -1)

  }

  return (
    <>
     <h1>chai and code</h1>
     <h2>couter value: {counter}</h2>
     <button onClick={addvalue}>add value{counter}</button>
     <br />
     <button onClick={removevalue}>remove value{counter}</button>
    </>
  )
}

export default App
