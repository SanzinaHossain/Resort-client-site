import { useLocation, useParams } from "react-router-dom"
import coverImage from "../../../../assets/background2.jpg"
import SectionCover from "../../../Molecules/SectionCover/SectionCover"
import BlogTag from "./BlogTag"
import BlogList from "./BlogList"
import BlogDetailsInformation from "./BlogDetailsInformation"
import { BlogDetailsStyle } from "../Styles"
import { useState } from "react"
import Loading from "../../../Molecules/Loading"
import BlogComments from "./BlogComments"

export default function BlogDetails() {
  const { id } = useParams()
  const [blogData, setBlogData] = useState()
  const [loading, setLoading] = useState(true)

  fetch(`https://resort-server-delta.vercel.app/blogs/${id}`)
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
