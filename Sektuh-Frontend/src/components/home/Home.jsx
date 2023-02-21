import Profile from "../profile/Profile"

const Home = ({user, setUser}) => {

    return (
        <div>
            {user && <Profile user={user} setUser={setUser} />}
        </div>
    )
}

export default Home