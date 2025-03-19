import React from 'react'

import { useNavigate } from 'react-router-dom';

export default function Read({record}) {
    console.log(record);
    const navigate = useNavigate();
  return (
    <div>
        <h1>Read all data</h1>
        {
            record.map((e, i) => {
                return <ul key={i}>
                    <li>Id : {e.id}</li>
                    <li>Name : {e.name}</li>
                    <li>Age : {e.age}</li>
                </ul>
            })
        }
        <button onClick={()=>navigate('/Create')}>Create</button>
        <button onClick={()=>navigate('/Delete')}>Delete</button>
        <button onClick={()=>navigate('/Update')}>Update</button>
    </div>
  )
}
