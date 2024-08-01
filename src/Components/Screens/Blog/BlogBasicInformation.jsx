import { FaComment, FaUserTag } from "react-icons/fa"
import { GrValidate } from "react-icons/gr"
import { BlogBasicStyle } from "./Styles"
import { useNavigate } from "react-router-dom"

export default function BlogBasicInformation({ blog, button }) {
  const navigate = useNavigate()
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
      {button ? (
        <button
          className={BlogBasicStyle.buttonStyle}
          onClick={() => navigate(`/blogDetails/${blog._id}`)}
        >
          Continue Reading....
        </button>
      ) : null}
    </div>
  )
}
