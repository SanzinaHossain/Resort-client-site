import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthProvider"
import { app } from "../../firebase.init"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth"

export default function LoginHooks() {
  const [loginUser, setLoginUser] = useState(null)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate()
  const { setUser } = useContext(AuthContext)

  // Login Function
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    signInWithEmailAndPassword(auth, email, password)
      .then((results) => {
        const user = results.user
        navigate("/restaurant")
        e.target.reset()
      })
      .catch((error) => {
        const errorMessage = error.message
      })
  }

  // Login set user
  useEffect(() => {
    const hello = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      hello()
    }
  }, [])

  const handleSignUp = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        updateProfile(user, {
          displayName: name,
        })
        navigate("/login")
      })
      .catch((error) => {})
    e.target.reset()
  }

  //   Google Login Function
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const data = result.user
        setUser(data)
        navigate("/")
      })
      .catch((error) => {
        console.log("error:", error.message)
      })
  }

  //    Logout Function
  const handleLogOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null)
        navigate("/login")
      })
      .catch((error) => {})
  }

  return { handleLogin, handleSignUp, handleGoogleLogin, handleLogOut }
}
