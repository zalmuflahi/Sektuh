import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

const Settings = ({ user, setUser }) => {
    const navigate = useNavigate()
    
    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        navigate('/')
    }

    return(
    <div>
        <button onClick={logout}>LOGOUT</button>
    </div>
    )
}
export default Settings