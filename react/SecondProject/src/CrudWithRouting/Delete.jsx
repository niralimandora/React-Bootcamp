import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Delete({record,setRecord}) {
  const navigate = useNavigate();
   
  const [id,setId] = useState('');
  const handledelete = ()=>{
    let filterdata = record.filter((obj)=> obj.id !== parseInt(id));
    setRecord(filterdata);
    navigate('/');
  }

  return (
    <div>
      <h1>Delete</h1>
      <input type="text" placeholder="Enter Id" onChange={(e)=>setId(e.target.value)} />
      <button onClick={handledelete}>Delete</button>
    </div>
  )
}
