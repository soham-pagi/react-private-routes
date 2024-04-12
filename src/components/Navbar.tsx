import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthProfile";

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20
}

export default function Navbar() {
    const { user, logoutUser } = useAuth();

    return (
        <div style={style}>
            <h2 style={{ margin: 10 }}><Link to={'/'}>Logo</Link></h2>
            <div style={{ display: 'flex', gap: 20 }}>
                <Link to={'/'}>Home</Link>
            </div>
            <div style={{ display: 'flex', gap: 20, marginRight: 20 }}>
                {user ?
                    <>
                        <Link to={'/setting'}>Settings</Link>
                        <Link to={'/profile'}>Profile</Link>
                        <button onClick={() => logoutUser()}>Logout</button>
                    </> :
                    <>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </>}
            </div>
        </div>
    )
}
