import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddNewUser } from '../redux/Actions/UsersActions'

const AddUser = () => {
    const [name, setName] = useState("")
    const getName=(e)=>{
        setName(e.target.value)
    }

    const dispatch=useDispatch()
    const addUser=()=>{
       let newUser={
            id:Math.random(),
            name
        }
        dispatch(AddNewUser(newUser))
    }
    
  return (
    <div>
    
          <Form style={{width:"400px",border:"solid"}} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={getName}
              />
            </Form.Group>
           <Button onClick={addUser} >Add</Button>
          </Form>
     

    </div>
  )
}

export default AddUser