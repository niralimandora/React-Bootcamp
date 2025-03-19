import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Creat({record,setRecord}) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handlebtn = ()=>{
    let obj ={id:record.length+1, name, age};
    setRecord([...record, obj]);
    navigate('/');
  }
  return (
    <div>
      <h1>Create</h1>
      <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
      <input type="text" value={age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={handlebtn}>Create</button>
    </div>
  )
}
