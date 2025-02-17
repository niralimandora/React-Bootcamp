import React, { useState } from 'react'

export default function Crud() {
    // state management with useState hook
    const [name, setName] = useState('')
    const [record,setRecord] = useState([])
    // add record
    const addRecord = ()=>{
        if(name){
            setRecord([...record,name])
            setName('')
        }
    }
    // delete record
    // const deleteRecord = (index)=>{
    //     setRecord(record.filter((item,i)=>i!==index))
    // }
 
  return (
    <div>
        <h1>SimpleCrud</h1>
        <input type='text' placeholder="Enter your name..." value={name} onChange={(e)=> setName(e.target.value)}/>
        <button onClick={addRecord}>Submit</button>
        {
            record.map((e,i)=>{
            return <h2 key={i}> {i+1} - {e}</h2>
        })
        }
        
        
    </div>
  )
}
