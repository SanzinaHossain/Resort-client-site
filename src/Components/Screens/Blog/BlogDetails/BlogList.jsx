import { useState } from "react"
import { BlogListStyle } from "../Styles"
import Loading from "../../../Molecules/Loading"

export default function BlogList() {
  const [blogData, setBlogData] = useState()
  const [loading, setLoading] = useState(true)
  fetch("https://resort-server-delta.vercel.app/blogs")
    .then((res) => res.json())
    .then((data) => {
      setBlogData(data)
      setLoading(false)
    })
  return (
    <div className={BlogListStyle.container}>
      <p className={BlogListStyle.titleStyle}>Blog List </p>
      <div className={BlogListStyle.dividerStyle}></div>
      <Loading isLoading={loading} />
      {blogData?.map((blog, index) => (
        <div key={index} className={BlogListStyle.dataContainer}>
          <img src={blog.image} className={BlogListStyle.imageStyle} />
          <p>{blog.name}</p>
        </div>
      ))}
    </div>
  )
}
