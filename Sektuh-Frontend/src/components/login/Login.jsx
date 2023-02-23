import { useRef } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
function Login({user, setUser}) {
    const navigate = useNavigate()
    const form = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData(form.current)
        let req = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: formData
        }
        )
        let res = await req.json()
        Cookies.set('token', res.token)
        setUser(res.user)
        navigate('/home')
    }
    return (
        <div className='App'> 
            <form onSubmit={handleSubmit} ref={form}>
                <input name="name" type="text" placeholder="Username or Email" />
                <input name="password" type="password" placeholder="Password" />
                <button>LOGIN</button>
            </form>
        </div>
    )
}

export default Login