import { handleBlogComment } from "../../../../Hooks/BlogCommentHooks"
import { BlogCommentFormStyle } from "../Styles"

export default function BlogCommentForm({ commentToken }) {
  return (
    <div className={BlogCommentFormStyle.container}>
      <h1 className={BlogCommentFormStyle.titleStyle}>Leave A Comment</h1>
      <form
        className={BlogCommentFormStyle.formStyle}
        onSubmit={(e) => handleBlogComment(e, commentToken)}
      >
        <div className={BlogCommentFormStyle.flexInputStyle}>
          <div className="w-full">
            <label className={BlogCommentFormStyle.labelStyle}>Name*</label>
            <input
              type="text"
              name="name"
              className={BlogCommentFormStyle.inputStyle}
              required={true}
            ></input>
          </div>
          <div className="w-full">
            <label className={BlogCommentFormStyle.labelStyle}>Email*</label>
            <input
              type="text"
              name="email"
              className={BlogCommentFormStyle.inputStyle}
              required={true}
            ></input>
          </div>
        </div>
        <label className={BlogCommentFormStyle.labelStyle}>Comment*</label>
        <textarea
          type="text"
          name="comment"
          className={BlogCommentFormStyle.textAreaStyle}
          required={true}
        ></textarea>

        <input
          className={BlogCommentFormStyle.buttonStyle}
          type="submit"
          value="Post A Comment"
        ></input>
      </form>
    </div>
  )
}
