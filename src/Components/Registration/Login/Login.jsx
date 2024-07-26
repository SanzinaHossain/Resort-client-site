import SectionCover from "../../Molecules/SectionCover/SectionCover"
import coverImage from "../../../assets/Cover.png"
import LoginForm from "./LoginForm"
export default function Login() {
  return (
    <div className="bg-white">
      <SectionCover
        image={coverImage}
        title="Login"
        subTitle="Experience New  Destination "
      />
      <div className="flex flex-col justify-center items-center p-10">
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}
