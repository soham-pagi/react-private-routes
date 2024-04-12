import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import PrivateRoutes from "./utils/PrivateRoutes"
import AuthProfile, { useAuth } from "./utils/AuthProfile"

function App() {
  return (
    <BrowserRouter>
      <AuthProfile>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<h1>Profile</h1>} />
            <Route path="/setting" element={<h1>Settings</h1>} />
          </Route>
        </Routes>
      </AuthProfile>
    </BrowserRouter>
  );
}

function Login() {
  const { loginUser } = useAuth();
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => loginUser()}>Login</button>
    </>
  )
}

export default App
