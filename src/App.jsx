import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Class from './components/Class'
import User from './components/User'
import Querry from './components/Querry'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
function App() {
  let [user,setUser] = useState([
    {
      id:1,
      name:"Gopika",
      email:"gopika@gmail.com",
      mobile:"987654321",
      batch:"B53"
    },
    {
      id:2,
      name:"Devi",
      email:"devi@gmail.com",
      mobile:"78987654567",
      batch:"B53"
    },
    {
      id:3,
      name:"Rdhakrishnan",
      email:"radhakrishnan@gmail.com",
      mobile:"89876543456",
      batch:"B53"
    }
  ])

  return <div id="wrapper">
    
   <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} />}/>
        <Route path='/add-user' element={<AddUser user={user} setUser={setUser} />}/>
        <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser} />}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/querry' element={<Querry/>}/>
        <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App