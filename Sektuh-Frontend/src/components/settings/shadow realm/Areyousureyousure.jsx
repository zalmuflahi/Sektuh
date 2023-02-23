import { useNavigate } from "react-router-dom"

const Areyousureyousure = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h2>Are you sure that you sure?</h2>
            <button onClick={() => navigate('/door2shadowrealm')}>YES</button>
            <button onClick={() => { navigate('/settings') }}>NO</button>
        </div>
    )
}
export default Areyousureyousure