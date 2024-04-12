import { createContext, useState, type ReactNode, useContext } from "react"

type ContextProps = {
  user: boolean,
  loading: boolean,
  loginUser: () => void,
  logoutUser: () => void,
}

type AuthProfileProps = {
  children: ReactNode,
}

const AuthContext = createContext<ContextProps | null>(null);

function AuthProfile({ children }: AuthProfileProps) {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);

  async function loginUser() {
    setLoading(true)

    await new Promise((resolve) => {
      setTimeout(() => {
        setUser(true);
        resolve('success')
      }, 3000)
    })

    setLoading(false)
  }

  async function logoutUser() {
    setLoading(true)

    await new Promise((resolve) => {
      setTimeout(() => {
        setUser(false);
        resolve('success')
      }, 3000)
    })

    setLoading(false)
  }

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    loginUser,
    logoutUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('AuthContext cannot be null');
  }

  return authContext;
}

export default AuthProfile;
export { useAuth };
