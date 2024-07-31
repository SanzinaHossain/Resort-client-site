import { useNavigate } from "react-router-dom"
import { handleSignUp } from "../../../Hooks/LoginHooks"
export default function RegisterForm() {
  const navigate = useNavigate()
  return (
    <form onSubmit={handleSignUp}>
      <h1 className="text-center text-3xl text-white my-3">Sign Up !!!</h1>
      <input
        className="p-5 w-full h-16 my-5 bg-white text-black "
        name="name"
        type="text"
        placeholder="Enter Your Name"
      />
      <input
        className="p-5 w-full h-16 my-5 bg-white text-black "
        name="email"
        type="email"
        placeholder="Enter Your Email"
      />
      <input
        className="p-5 w-full h-16 my-5 bg-white text-black"
        name="password"
        type="password"
        placeholder="Enter Your Password"
      />
      <input
        className="p-4 w-full h-16 my-5 bg-black font-bold  text-white text-xl"
        type="submit"
        value="Sign Up"
        style={{ cursor: "pointer" }} // Change cursor on hover to pointer
      />

      <p className="text-center text-white">
        Already Have An Account?{" "}
        <button className="text-primary" onClick={() => navigate("/login")}>
          Login
        </button>
      </p>
    </form>
  )
}
