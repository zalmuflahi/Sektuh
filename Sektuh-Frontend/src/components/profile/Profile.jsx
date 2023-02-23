import { useNavigate } from "react-router-dom"

const Profile = ({user}) => {
   const navigate = useNavigate() 
    
    return (
        <div>
            <button onClick={() => { navigate('/home') }}>Back</button>
            <button onClick={()=>{navigate('/settings')}}>⚙️</button>
            <h1>{user.username}</h1>

        </div>
    )
}

export default Profile