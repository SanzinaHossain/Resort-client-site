import BlogBasicInformation from "../BlogBasicInformation"
import { text1, text2, text3 } from "../BlogData"
import blog6 from "../../../../assets/Blog/blog6.jpg"
import blog7 from "../../../../assets/Blog/blog7.jpg"
import BlogFactor from "./BlogFactor"
import BlogCommentForm from "./BlogCommentForm"

export default function BlogDetailsInformation({ data }) {
  return (
    <div className="lg:col-span-2 col-span-1  text-black w-full">
      <BlogBasicInformation blog={data} button={false} />
      <p className="text-justify">{text1}</p>
      <img className="w-full my-5" src={data.image} />
      <p className="text-3xl text-primary">{data.name}</p>
      <p className="text-justify mt-5">{data.details}</p>
      <div className="flex gap-x-5 my-5 lg:flex-row  md:flex-row flex-col  gap-y-5">
        <img className="w-full" src={blog6} />
        <img className="w-full" src={blog7} />
      </div>
      <p>{text3}</p>
      <p className="mt-5">{text2}</p>
      <BlogFactor />
      <p>{text3}</p>
      <div className="divider"></div>
      <BlogCommentForm />
    </div>
  )
}
