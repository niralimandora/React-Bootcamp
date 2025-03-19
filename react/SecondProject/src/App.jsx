import React, { useState } from 'react'


import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Read from './CrudWithRouting/Read';
import Creat from './CrudWithRouting/Creat';
import Delete from './CrudWithRouting/Delete';
import Update from './CrudWithRouting/Update';


export default function App() {

  const [record, setRecord] = useState([
    {id: 1, name: 'Rahul', age: 22,},
    {id: 2, name: 'Raj', age: 23,},
    {id: 3, name: 'Rohan', age: 24,}, 
    {id: 4, name: 'Ravi', age: 25,},
    {id: 5, name: 'Rajesh', age: 26,},
    {id: 6, name: 'Rakesh', age: 27,},
    {id: 7, name: 'Rahim', age: 28,},
    {id: 8, name: 'Rahul', age: 29,},
    {id: 9, name: 'Raj', age: 30,},
    {id: 10, name: 'Rohan', age: 31,},
  ])
    
  return (
    <div>
      {/* this for routing for filter, sorting and searching */}
      {/* <BrowserRouter>
      <Navbarr/>
        <Routes>
          <Route path='/' Component={Filter} />
          <Route path='/sorting' Component={Sorting}/>
          <Route path='/Searching' Component={Searching} />
        </Routes>
      </BrowserRouter> */}
      {/* this for crud */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Read record={record}/>}/>
          <Route path='/create' element={<Creat record={record} setRecord={setRecord}/>}/>
          <Route path='/delete' element={<Delete record={record} setRecord={setRecord}/>} />
          <Route path='/update' Component={Update} />
        </Routes>
      </BrowserRouter>
     </div>
  )
}
