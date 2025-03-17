import React from 'react'


export default function FirstPage({name,setName}) {
    const handleChange = () => {
        setName("Naksh")
    }
  return (
    <div>
        <h1>Name : {name} </h1>
        <button onClick={handleChange}>Change Name</button>
    </div>
  )
}
