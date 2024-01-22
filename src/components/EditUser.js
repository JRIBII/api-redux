import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/Actions/UsersActions';

const EditUser = ({el}) => {
  const [show, setShow] = useState(false);
console.log(el)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newName, setNewName] = useState("")
  const newInput=(el)=>{
     setNewName(el.target.value)
  }
const EditJemla=()=>{
handleClose(   )
editName(el.name)
}
  const dispatch = useDispatch()
  const editName = () => { dispatch(editUser({ id: el.id, name: newName }))}
  console.log(newName)
  console.log(el.name)

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="NAME"
                onChange={newInput}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={EditJemla}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditUser