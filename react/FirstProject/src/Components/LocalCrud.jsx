import React, { useState } from "react";

export default function LocalCrud() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null)

  const handleSubmit = () => {
   if(editIndex==null) {
    let obj = {id : Date.now() ,name, email, city, gender };
    setRecord([...record, obj]);
   } else {
    let singleData = record.find((item) => item.id == editIndex)
    singleData.name = name
    singleData.email = email
    singleData.city = city
    singleData.gender = gender
   }

    setName("");
    setCity("");
    setEmail("");
    setGender("");
    setEditIndex(null)
  };

  const handleDelete = (id)=>{
    const deletedData = record.filter((item)=>item.id != id) 
    setRecord(deletedData)
  }

  const handleUpdate = (id)=>{
    const updatedData = record.find((item)=>item.id == id) 
    setName(updatedData.name)
    setEmail(updatedData.email)
    setCity(updatedData.city)
    setGender(updatedData.gender)
    setEditIndex(id)

  }
  return (
    <div>
      <h1>LocalCrud</h1>
      <input
        type="text"
        placeholder="Enter your Name"   
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <label htmlFor="">Male</label>
      <input
        type="radio"
        value={"male"}
        checked={gender == "male" ? true : false}
        name="gender"
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="">Female</label>
      <input
        type="radio"
        value={"female"}
        checked={gender == "female" ? true : false}
        name="gender"
        onChange={(e) => setGender(e.target.value)}
      /><br/>

      <label htmlFor="">City : </label>
      <select onChange={(e) => setCity(e.target.value)} value={city}>
        <option value="rajkot" selected >Rajkot</option>
        <option value="surat">Surat</option>
        <option value="vadodara">Vadodara</option>
      </select><br/>
      <button onClick={handleSubmit}>{editIndex == null ? "Submit" : "Update"}</button>

      <table width="80%" style={{ border: "2px solid black" }}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Gender</th>
          <th colSpan="2">Action</th>
        </tr>
        {record.map((e, i) => {
          return (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.city}</td>
              <td>{e.gender}</td>
              <td><button onClick={()=>handleUpdate(e.id)}>Edit</button></td>
              <td><button onClick={()=>handleDelete(e.id)} >Delete</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}