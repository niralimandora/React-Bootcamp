import React, { useState } from 'react'

export default function Counter() {
    // state management
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Nirali");
  const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10]);
  
  
  // increment counter
  const increment = () => {
    setCount(count + 1)
  }
  
  // decrement counter
  const decrement = () => {
    if(count > 0) {
      setCount(count - 1)
    }
  }
  //reset
  const reset = () => {
    setCount(0)
  }

  // render component
  return (<div id='count'>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <div id='btn'>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        </div>
        <h3>Name: {name}</h3>
        <h4>arr:{arr}</h4>
    </div>
  )
}
