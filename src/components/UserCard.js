import { useNavigate } from 'react-router-dom'

export const UserCard = (props) => {

    let navigate = useNavigate();

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <button onClick={()=>{navigate("/users/profile/"+props.id)}}>See profile</button>
        </div>
    )
}