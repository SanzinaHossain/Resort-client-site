import { blogData } from "../BlogData"
import { BlogListStyle } from "../Styles"

export default function BlogList() {
  return (
    <div className={BlogListStyle.container}>
      <p className={BlogListStyle.titleStyle}>Blog List </p>
      <div className={BlogListStyle.dividerStyle}></div>
      {blogData.map((blog, index) => (
        <div key={index} className={BlogListStyle.dataContainer}>
          <img src={blog.image} className={BlogListStyle.imageStyle} />
          <p>{blog.name}</p>
        </div>
      ))}
    </div>
  )
}
