import { AiOutlineCheck } from "react-icons/ai"
import { blogFactor } from "../BlogData"

export default function BlogFactor() {
  return (
    <div className="bg-gray-50 my-5 p-5">
      <p className="text-2xl mb-5">What factor should be keep in mind</p>
      {blogFactor.map((factor, index) => (
        <div key={index} className="flex gap-x-2 mt-3 items-center">
          <AiOutlineCheck className="text-xl text-primary" />
          <p>{factor.value}</p>
        </div>
      ))}
    </div>
  )
}
