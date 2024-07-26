import { handleLogin } from "../../../Hooks/LoginHooks"

export default function LoginForm() {
  return (
    <form onSubmit={handleLogin}>
      <h1 className="text-center text-3xl text-black my-3">Login user</h1>
      <input
        className="p-5 w-full h-16 my-5 bg-secondary "
        name="email"
        type="email"
        placeholder="Enter Your Email"
      />
      <input
        className="p-5 w-full h-16 my-5 bg-secondary "
        name="password"
        type="password"
        placeholder="Enter Your Password"
      />
      <input
        className="p-5 w-full h-16 my-5 bg-primary font-bold  text-white text-xl"
        type="submit"
        value="Login"
      />
      <button className="p-5 w-full h-16 my-5 bg-primary text-white text-xl font-bold">
        Google Login
      </button>
    </form>
  )
}
