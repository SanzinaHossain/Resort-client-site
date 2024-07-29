import { FaComment, FaUserTag } from "react-icons/fa"
import { GrValidate } from "react-icons/gr"
import { BlogBasicStyle } from "./Styles"

export default function BlogBasicInformation({ blog }) {
  return (
    <div className={BlogBasicStyle.container}>
      <div className={BlogBasicStyle.singleItemContainer}>
        <div className={BlogBasicStyle.dataContainer}>
          <FaUserTag className={BlogBasicStyle.iconStyle} />
          <p>{blog.designation}</p>
        </div>

        <div className={BlogBasicStyle.dataContainer}>
          <GrValidate className={BlogBasicStyle.iconStyle} />
          <p>{blog.date}</p>
        </div>

        <div className={BlogBasicStyle.dataContainer}>
          <FaComment className={BlogBasicStyle.iconStyle} />
          <p>Comment: {blog.comment}</p>
        </div>
      </div>
      <button className={BlogBasicStyle.buttonStyle}>
        Continue Reading....
      </button>
    </div>
  )
}
