import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import LoginHooks from "../../../Hooks/LoginHooks"

export default function LoginForm() {
  const navigate = useNavigate()
  const { handleGoogleLogin, handleLogin } = LoginHooks()

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1 className="text-center text-3xl text-white my-3">Login Here</h1>
        <input
          className="p-5 w-full h-16 my-5 bg-white text-black "
          name="email"
          type="email"
          required={true}
          placeholder="Enter Your Email"
        />
        <input
          className="p-5 w-full h-16 my-5 bg-white text-black"
          name="password"
          type="password"
          required={true}
          placeholder="Enter Your Password"
        />
        <input
          className="p-4 w-full h-16 my-5 bg-black font-bold  text-white text-xl"
          type="submit"
          value="Login"
          style={{ cursor: "pointer" }}
        />
      </form>
      <div className="divider ">OR</div>
      <button
        className="p-4 w-full h-16 my-5 bg-black text-white text-xl font-bold flex items-center gap-x-2 justify-center"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="text-4xl"></FcGoogle>
        Continue With Google
      </button>
      <p className="text-center text-white">
        Don't Have Any Account?{" "}
        <button className="text-primary" onClick={() => navigate("/register")}>
          Register
        </button>
      </p>
    </div>
  )
}
