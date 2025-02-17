import React, { useState } from 'react'

export default function Calc() {
    const [name,setName] = useState();
    // const handlechange = (e)=>{
    //     setName(e.target.value);
    // }
    //calculate
    // }
  // calculate sum, difference, product, quotient, remainder
    const [num1,setNum1] = useState();
    const [num2, setNum2] = useState();
    const [Result, setResult] = useState();
    const handleAdd = ()=>{
        setResult(num1 + num2);
    }
    // const handleMin = ()=>{
    //     setResult(num1 - num2);
    // }

  return (
    <div>
        {/* <h1>Crud</h1>
        <input type="text"  onChange={(e)=>{
            setName(e.target.value);
        }} />
        <h2>{name}</h2> */}
        <h1>Calculater</h1>
        <input type="number" placeholder="Number 1" onChange={(e)=>{
            setNum1(Number(e.target.value));
        }}/>
        <input type="number" placeholder="Number 2" onChange={(e)=>{
            setNum2(Number(e.target.value));
        }}/>
        <button onClick={handleAdd}>+</button>
        <button onClick={()=>{setResult(num1 - num2)}}>-</button>
        <button onClick={()=>{setResult(num1 * num2)}}>*</button>
        <button onClick={()=>{setResult(num1 / num2)}}>/</button>
        <h2>Ans is : {Result}</h2>
    </div>
  )
}
