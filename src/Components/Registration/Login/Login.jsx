import SectionCover from "../../Molecules/SectionCover/SectionCover"
import coverImage from "../../../assets/Cover.png"
import LoginForm from "./LoginForm"
export default function Login() {
  return (
    <div
      className="hero h-full "
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-70 flex justify-center items-center p-10">
        <div className="bg-secondary p-10 lg:w-96 w-full">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  )
}
