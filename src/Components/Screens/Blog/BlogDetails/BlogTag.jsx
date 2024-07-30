import { BlogTags } from "../BlogData"
import { BlogTagStyle } from "../Styles"

export default function BlogTag() {
  return (
    <div className={BlogTagStyle.container}>
      <p className={BlogTagStyle.titleStyle}>TAG </p>
      <div className={BlogTagStyle.dividerStyle}></div>
      <div className={BlogTagStyle.dataContainer}>
        {BlogTags.map((tag, index) => (
          <div className={BlogTagStyle.tagContainer} key={index}>
            {tag.value}
          </div>
        ))}
      </div>
    </div>
  )
}
