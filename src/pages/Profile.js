import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

export const Profile = (props) => {

    let params = useParams();

    let [user, setUser] = useState({})

    useEffect(()=>{

        async function getUser(){
            let result = await axios
            .get("https://jsonplaceholder.typicode.com/users/"+params.idUser);
            console.log(result.data)
            setUser(result.data)
        }

        getUser()

    }, [params])

    return (
        <div>
            <br/> <br /> <br />
            <p>{user.name}</p>
        </div>
    )
}