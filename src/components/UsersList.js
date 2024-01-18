import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../redux/Actions/UsersActions";
const UsersList = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//       return setUsers(res.data);
//     }).catch(err=> console.log(err));
//   },[]);
// console.log(users)
const dispatch=useDispatch()
useEffect(() => {
    dispatch(getUsers())
}, [])

const {users}=useSelector(state=>state)
console.log(users)


  return (
    <div style={{display:"flex",flexWrap:"wrap"}} >
{
    users.map((el)=>
    
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        <Card.Body>
          <Card.Title> {el.name} </Card.Title>
          <Card.Text>
          </Card.Text>
          <Button variant="primary" onClick={()=>dispatch(deleteUser(el.id))} >Delete</Button>
        </Card.Body>
      </Card>
    )
}
    
  
    </div>
  );
};

export default UsersList;
