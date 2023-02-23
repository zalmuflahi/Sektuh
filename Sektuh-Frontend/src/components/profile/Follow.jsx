import {useState} from 'react'
import Cookies from 'js-cookie'


const Follow = () => {
    const [follow, setFollow] = useState('')
    const [profiles, setProfiles] = useState({})
    
    useEffect(() => {
        const loadUser = async () => {
            let req = await fetch('http://localhost:3000/profile', {
                headers: { 'Authorization': Cookies.get('token') }
            })
            let res = await req.json()
            if (res.user) setProfiles(res.user)
        }
        if (Cookies.get('token'))
            loadUser()
    }, [])

    console.log(user)
    function handleClick() {
        async function request() {
            const req = await fetch(`http://localhost:3000/follow/${profiles.username}`, {
                headers: { 'Authorization': Cookies.get('token') },
                method: 'POST'
            });
            const res = await req.json();
            setFollow(res);
            console.log(res)
        }
        request();
    }

    return (
        <div>
        <button onClick={handleClick}>Follow</button>
        </div>
    )
}

export default Follow