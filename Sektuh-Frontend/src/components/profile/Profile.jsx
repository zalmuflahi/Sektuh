import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Profile = ({user}) => {
   const navigate = useNavigate() 
    const [userposts, setUserposts] = useState([])
    useEffect(() => {
        const request = async () => {
            let req = await fetch(`http://localhost:3000/show/${user.id}`, {
                headers: { 'Authorization': Cookies.get('token') },
            })
            let res = await req.json()
            setUserposts(res)
        }
        if (user.username) {
            request()
        } else {
            navigate("/home")
        }
    }, [user])


    return (
        <div>
            <button onClick={() => { navigate('/home') }}>Back</button>
            <button onClick={()=>{navigate('/settings')}}>⚙️</button>
            <h1>{user.username}</h1>
            <img src={user.pfp} alt=''/>
            <h3>{user.name}</h3>
            <p>{user.bio}</p>
            <hr />
            <h3>Posts</h3>
        </div>
    )
}

export default Profile