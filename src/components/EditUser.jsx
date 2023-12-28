import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';

function EditUser({ user, setUser }) {

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [mobile, setMobile] = useState("")
  let [batch, setBatch] = useState("")

  let params = useParams() //this will return the object
  let navigate = useNavigate() //this will return the function

  const findIndex = (id) => {
    for (let i =  0; i < user.length; i++) {
      if (user[i].id === id)
        return i
    }
  }

  const handleEdit = () => {
    let id = Number(params.id)
    let index = findIndex(id)
    const newAarry = [...user]
    newAarry.splice(index, 1,{
      id,
      name,
      email,
      mobile,
      batch
    })
    setUser(newAarry)
     navigate('/dashboard')
  }

  const getUserData = () => {
    let id = Number(params.id)
    let index = findIndex(id)

    setName(user[index].name)
    setEmail(user[index].email)
    setMobile(user[index].mobile)
    setBatch(user[index].batch)
  }

  useEffect(()=>{
    getUserData()
  },[])

  return <>
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="number" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Batch</Form.Label> 
              <Form.Control type="text" placeholder="Batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
            </Form.Group>

            <Button variant="primary" onClick={() => { handleEdit() }}>Submit</Button>
          </Form>
        </div>
      </div>
    </div>

  </>
}

export default EditUser

 
