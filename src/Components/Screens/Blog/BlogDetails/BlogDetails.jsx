import { useLocation } from "react-router-dom"
import coverImage from "../../../../assets/background2.jpg"
import SectionCover from "../../../Molecules/SectionCover/SectionCover"
import BlogTag from "./BlogTag"
import BlogList from "./BlogList"
import BlogDetailsInformation from "./BlogDetailsInformation"
import { BlogDetailsStyle } from "../Styles"

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
      <div className={BlogDetailsStyle.container}>
        <BlogDetailsInformation data={data} />
        <div className={BlogDetailsStyle.dataContainer}>
          <BlogTag />
          <BlogList />
        </div>
      </div>
    </>
  )
}
