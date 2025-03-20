// fatch api data and display in table format

import React, { useEffect, useState } from 'react'

export default function Api() {
    const [record,setRecord] = useState([]);
    useEffect(()=>{
        fetchApi();
    },[])
    const fetchApi = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setRecord(data);
    }
    return (
    <div>
        <h1>Api</h1>
        <table border="1">
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
            {record.map((obj)=>
                <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.body}</td>
                </tr>
            )}
            </tbody>
        </table>
        
    </div>
  )
}
