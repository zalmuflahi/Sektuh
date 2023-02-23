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
        <button onClick={() => { navigate('/profile') }}>Back</button>
        <button onClick={()=>{navigate('/edit_profile')}}>Edit Account</button>
        <button onClick={logout}>LOGOUT</button>
        <button onClick={() => {navigate('/yes_i_am')}}>Delete Account</button>
    </div>
    )
}
export default Settings