import React from 'react'
import Searching from './route/Searching';
import Sorting from './route/Sorting';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Filter from './route/filter';

export default function App() {
    
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Filter} />
          <Route path='/searching' Component={Sorting}/>
          <Route path='/sorting' Component={Searching} />
        </Routes>
      </BrowserRouter>
     </div>
  )
}
