import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

const Profile = ({user, setUser}) => {
   const navigate = useNavigate() 
    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        navigate('/')
    }

    return (
        <div>
            <h1>{user.username}</h1>
            <button onClick={logout}>LOGOUT</button>
        </div>
    )
}
export default Profile