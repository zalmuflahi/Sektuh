import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cookies from "js-cookie";
import Home from './components/home/Home';
import Login from './components/login/Login';
import Profile from "./components/profile/Profile";
import Settings from "./components/settings/Settings";
import Areyousureyousure from "./components/settings/shadow realm/Areyousureyousure";
import Areyousure from "./components/settings/shadow realm/Areyousure";
import Youreallywantto from "./components/settings/shadow realm/Youreallywantto";
import Shadowrealm from "./components/settings/shadow realm/Shadowrealm";
import EditProfile from "./components/settings/Editprofile";

function App() {
  const [user, setUser] = useState([])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login user={user} setUser={setUser}/>,
    },
    {
      path: "/home",
      element: <Home user={user} setUser={setUser}/>,
    },
    {
      path: "/profile",
      element: <Profile user={user} setUser={setUser} />,
    },
    {
      path: "/edit_profile",
      element: <EditProfile user={user} setUser={setUser} />,
    },
    {
      path: "/settings",
      element: <Settings user={user} setUser={setUser} />,
    },
    {
      path: "/yes_delete_it",
      element: <Areyousureyousure />,
    },
    {
      path: "/yes_i_am",
      element: <Areyousure />,
    },
    {
      path: "/door2shadowrealm",
      element: <Youreallywantto />,
    },
    {
      path: "/shadowrealm",
      element: <Shadowrealm user={user} setUser={setUser} />,
    }
  ]);

  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch('http://localhost:3000/me', {
        headers: { 'Authorization': Cookies.get('token') }
      })
      let res = await req.json()
      if (res.user) setUser(res.user)
    }
    if (Cookies.get('token'))
      loadUser()
  }, [])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
