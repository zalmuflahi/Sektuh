import { useState } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ user, setUser}) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        let req = await fetch(`http://localhost:3000/edit/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': Cookies.get('token'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password, name }),
        });
        let res = await req.json()
        setUser(res);
        console.log(res);
        navigate('/settings')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h5>Name</h5>
                    <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <br />
                <div>
                    <h5>Username</h5>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br />
                <div>
                    <h5>Password</h5>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <button type="submit">SAVE CHANGES</button>
                <button onClick={() => { navigate('/settings') }}>CANCEL</button>
            </form>
        </div>
    );
};

export default EditProfile;
