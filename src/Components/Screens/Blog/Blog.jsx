import React from "react"
import SectionCover from "../../Molecules/SectionCover/SectionCover"
import coverImage from "../../../assets/background2.jpg"
import { blogData } from "./BlogData"
import BlogBasicInformation from "./BlogBasicInformation"
import { BlogStyle } from "./Styles"

const Blog = () => {
  return (
    <div className="bg-white">
      <SectionCover
        title="Blogs"
        subTitle="Our Talents Share Their Thoughts"
        image={coverImage}
      />
      <div className={BlogStyle.container}>
        {blogData.map((blog, index) => (
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
