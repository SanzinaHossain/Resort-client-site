import React, { useContext, useState } from "react"
import SectionCover from "../../Molecules/SectionCover/SectionCover"
import coverImage from "../../../assets/background2.jpg"
import BlogBasicInformation from "./BlogBasicInformation"
import { BlogStyle } from "./Styles"
import Loading from "../../Molecules/Loading"

const Blog = () => {
  const [blogData, setBlogData] = useState()
  const [loading, setLoading] = useState(true)

  fetch("https://resort-server-delta.vercel.app/blogs")
    .then((res) => res.json())
    .then((data) => {
      setBlogData(data)
      setLoading(false)
    })

  return (
    <div className="bg-white">
      <SectionCover
        title="Blogs"
        subTitle="Our Talents Share Their Thoughts"
        image={coverImage}
      />
      <div className={BlogStyle.container}>
        <Loading isLoading={loading} />
        {blogData?.map((blog, index) => (
          <div key={index} className="">
            <img src={blog.image} className="w-full" />
            <div className={BlogStyle.dataContainer}>
              <p className={BlogStyle.blogNameStyle}>{blog.name}</p>
              <p className={BlogStyle.blogDetailsStyle}>{blog.details}</p>
              <div className="divider"></div>
              <BlogBasicInformation blog={blog} button={true} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
