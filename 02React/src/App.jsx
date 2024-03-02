import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hooks
  const [counter, setCounter] = useState(15)
  
  //counter value can be changed by this
  //let counter =15

  const addValue = () => {
    console.log("Clicked", counter);
    //counter=counter+1;
    setCounter(counter + 1)   
    setCounter(counter + 1) 
    setCounter(counter + 1)  
    setCounter(counter + 1) 
    //OR   setCounter(counter+1)
  }

  return (
    <>
      <h1> Kanika Reacting </h1>
      <h2>Counter value: {counter}</h2>   
      <button onClick={addValue}>
        Add value{counter}</button>
      <button>Remove value {counter}</button> 
      <p>footer: {counter}</p>
    </>
  )
}

export default App
