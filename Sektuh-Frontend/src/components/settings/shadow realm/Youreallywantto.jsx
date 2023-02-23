import { useNavigate } from "react-router-dom";

const Youreallywantto = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Do you really want to delete your Account?</h2>
            <button onClick={() => navigate('/shadowrealm')}>YES</button>
            <button onClick={() => { navigate('/settings') }}>No im beings held at gun point</button>
        </div>
    )
}

export default Youreallywantto