import axios from "axios"
import { useEffect, useState } from "react"
import ListGroup from 'react-bootstrap/ListGroup';

const ListUsers = () => {
    const [users,setUsers] = useState ([])
    useEffect( ()=>{
        axios.get ('https://jsonplaceholder.typicode.com/users').then((res)=> setUsers(res.data)).catch ((error)=>console.log(error))

    },[])
    return (
        <div className="nidham">
            {
                users.map(user =>  <ListGroup.Item>{user.name}</ListGroup.Item>)
            }



        </div>
    )
}
export default ListUsers