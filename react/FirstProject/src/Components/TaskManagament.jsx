import React, { useState } from "react";
export default function TaskManagament() {
    // state management with useState hook
        const [tasks, setTasks] = useState("");
        const [Priority, setPriority] = useState("")

        const [record, setRecord] = useState([]);
        const [editIndex, setEditIndex] = useState(null)
    //add
    const handleSubmit = () => {
        if(editIndex==null) {
         let obj = {id : Date.now() ,tasks, Priority , satatus : pending};
         setRecord([...record, obj]);
        } else {
         let singleData = record.find((item) => item.id == editIndex)
         singleData.tasks = tasks
         singleData.Priority = Priority
        }
        
    setTasks("");
    setPriority("");
    
    setEditIndex(null)
    };
    //delete
    
    const handleDelete = (id)=>{
        const deletedData = record.filter((item)=>item.id!= id) 
        setRecord(deletedData)
      }
    //edit
    const handleUpdate = (id)=>{
        const singleData = record.find((item)=>item.id == id)
        setTasks(singleData.tasks)
        setPriority(singleData.Priority)
        setEditIndex(id)
    }
    //pending
    const pending = 'Pending'
    //completed
    const completed = 'Completed'
    //mark as completed
    const handleCompleted = (id) => {
        let singleData = record.find((item) => item.id == id)
        singleData.satatus = completed
        setRecord([...record])
    }
  
  return (
    <div>
        <h1>Task Managament</h1>
        <input type="text" placeholder='Enter Your Task' 
            value={tasks} onChange={(e)=> setTasks(e.target.value)}>
        </input><br/>

        <label htmlFor="">Priority : </label>
        <select onChange={(e) => setPriority(e.target.value)} value={Priority}>
            <option value="High" selected >High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select><br/>
        <button onClick={handleSubmit}>{editIndex == null ? "Submit" : "Update"}</button>
        <h1>Tasks Table</h1>
        <table id="tab1" width="80%" style={{ border: "2px solid black" }}>
            <tr>
                <th>Task</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
                <th>Mark as completed</th>
            </tr>
            {record.map((e,i)=>{
                return <tr key={i}>
                    <td>{e.tasks}</td>
                    <td>{e.Priority}</td>
                    <td>{e.satatus}</td>
                    <td>
                        <button onClick={()=>handleUpdate(e.id)}>Edit</button>
                        <button onClick={()=>handleDelete(e.id)}>Delete</button>
                    </td>
                    <td>
                        <button onClick={()=>handleCompleted(e.id)}>{e.satatus === pending? 'Mark as completed' : 'Completed'}</button>
                    </td>


                </tr>
            })}
        </table>
    </div>
  );
}

