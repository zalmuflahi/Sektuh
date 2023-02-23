import { useNavigate } from "react-router-dom"

const Areyousure = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h2>Are you sure?</h2>
            <button onClick={() => navigate('/yes_delete_it')}>YES</button>
            <button onClick={() => { navigate('/settings') }}>NO</button>
        </div>
    )
}
export default Areyousure