import { useLocation, useParams } from "react-router-dom"
import coverImage from "../../../../assets/background2.jpg"
import SectionCover from "../../../Molecules/SectionCover/SectionCover"
import BlogTag from "./BlogTag"
import BlogList from "./BlogList"
import BlogDetailsInformation from "./BlogDetailsInformation"
import { BlogDetailsStyle } from "../Styles"
import { useState } from "react"
import Loading from "../../../Molecules/Loading"

export default function BlogDetails() {
  const { id } = useParams()
  const [blogData, setBlogData] = useState()
  const [loading, setLoading] = useState(true)

  fetch(`http://localhost:5000/blogs/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setBlogData(data)
      setLoading(false)
    })

  return (
    <>
      <SectionCover
        title="Blogs"
        subTitle="Our Talents Share Their Thoughts"
        image={coverImage}
      />
      <div className={BlogDetailsStyle.container}>
        {blogData ? (
          <BlogDetailsInformation data={blogData} />
        ) : (
          <Loading isLoading={loading} />
        )}
        <div className={BlogDetailsStyle.dataContainer}>
          <BlogTag />
          <BlogList />
        </div>
      </div>
    </>
  )
}
