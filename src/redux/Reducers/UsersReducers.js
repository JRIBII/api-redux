import { ADD_USER, DELETE_USER, GET_USER } from "../Constants/Constants";

export const userReducer=(state={users:[]},{type,payload})=>{
switch (type) {
    case GET_USER:
     return {...state,users:payload}
    case ADD_USER:
        return {users:[...state.users,payload]}
    case DELETE_USER:
        return {users: state.users.filter((user)=>user.id!==payload)}
    default:
        return state;
}

}