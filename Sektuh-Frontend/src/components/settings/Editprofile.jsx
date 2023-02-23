import { useState } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ user, setUser }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('')
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = Cookies.get('token');
            const req = await fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password, name }),
            });

            if (!req.ok) {
                const errorMessage = await req.json();
                throw new Error(errorMessage.error);
            }
            const res = await req.json()
            setUser(res);
            navigate('/profile');
        } catch {
            setError(e.message);
            console.log(e)
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <h5>Name</h5>
                    <input
                        type="text"
                        value={name}
                        placeholder="First name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <h5>Username</h5>
                    <input
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <button type="submit">SAVE CHANGES</button>
                <button onClick={() => { navigate('/settings') }}>CANCEL</button>
            </form>
        </div>
    );
};

export default EditProfile;
