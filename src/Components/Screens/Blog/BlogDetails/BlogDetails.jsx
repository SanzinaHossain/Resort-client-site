import React from "react"
import { useLocation } from "react-router-dom"
import coverImage from "../../../../assets/background2.jpg"
import BlogBasicInformation from "../BlogBasicInformation"
import blog6 from "../../../../assets/Blog/blog6.jpg"
import blog7 from "../../../../assets/Blog/blog7.jpg"
import SectionCover from "../../../Molecules/SectionCover/SectionCover"
import BlogFactor from "./BlogFactor"
import BlogCommentForm from "./BlogCommentForm"
import { text1, text2, text3 } from "../BlogData"
import BlogTag from "./BlogTag"
import BlogList from "./BlogList"

export default function BlogDetails() {
  const location = useLocation()
  const data = location.state
  return (
    <>
      <SectionCover
        title="Blogs"
        subTitle="Our Talents Share Their Thoughts"
        image={coverImage}
      />
      <div className="bg-white p-10 grid lg:grid-cols-3  grid-cols-1 justify-evenly w-full text-justify ">
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
        <div className="col-span-1 lg:p-5 p-0">
          <BlogTag />
          <BlogList />
        </div>
      </div>
    </>
  )
}
