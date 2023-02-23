import { useNavigate } from "react-router-dom"

const Home = ({user, setUser}) => {
const navigate = useNavigate()
    return (
        <div>
            <button onClick={()=>{navigate('/profile')}}>Profile</button>
        </div>
    )
}

export default Home