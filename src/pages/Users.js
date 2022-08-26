import axios from 'axios'
import { useEffect, useState } from 'react';
import { UserCard } from '../components/UserCard';

export const Users = (props) => {
    let [users, setUsers] = useState([])

    useEffect(()=>{

        async function getUsers(){
            let result = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(result.data)
        }

        getUsers()
    }, [users])

    // function navigate(){
    //     navigation("/users/profile/1")
    // }

    return (
        <div>
            <br /><br /><br />
            {users.map((element) => {
                return (
                    <UserCard name={element.name} email={element.email} id={element.id} />
                )
            })}
        </div>
        
    )
}