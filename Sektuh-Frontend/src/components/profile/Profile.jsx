import { useNavigate } from "react-router-dom"
// import Follow from "./Follow"

const Profile = ({user}) => {
   const navigate = useNavigate() 
    
    return (
        <div>
            <button onClick={()=>{navigate('/settings')}}>⚙️</button>
            <h1>{user.username}</h1>
            
        </div>
    )
}

export default Profile