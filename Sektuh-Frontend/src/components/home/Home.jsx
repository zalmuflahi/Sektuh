import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

const Home = ({ user, setUser }) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadFeed = async () => {
            let req = await fetch('http://localhost:3000/newsfeed', {
                headers: { 'Authorization': Cookies.get('token') }
            })
            if (req.status === 200) {
                let res = await req.json()
                setPosts(res);
            }
        }
        if (Cookies.get('token'))
            loadFeed()
    }, [])

    return (
        <div>
            <button onClick={() => { navigate('/profile') }}>Profile</button>
            <div className='homepage'>
                <div className='post-container'>
                    <div className='scroll-container'>
                        {posts.map(post => (
                            <div key={post.id} className='scroll-page'>
                                <img src={post.img_url} alt={post.content} />
                                <p style={{ fontSize: '50px' }}>{post.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
