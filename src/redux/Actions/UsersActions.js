import axios from "axios"
import { ADD_USER, DELETE_USER, EDIT_USER, FAIL_USER, GET_USER } from "../Constants/Constants"

export const getUsers=()=>async(dispatch)=>{
  try {
    const res= await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res)
    dispatch({
        type:GET_USER,
        payload:res.data
    })

  } catch (error) {
    dispatch({
        type:FAIL_USER,
        payload:error
    })
  }
}

export const AddNewUser=(payload)=>{
return {
    type:ADD_USER,
    payload
}
}

export const deleteUser=(payload)=>{
    return {
        type:DELETE_USER,
        payload
    }
}
export const editUser=(payload)=>{
  console.log(payload)
    return {
      type:EDIT_USER,
      payload
    }
}