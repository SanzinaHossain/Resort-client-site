import { handleBlogComment } from "../../../../Hooks/BlogCommentHooks"

export default function BlogCommentForm() {
  return (
    <div className="py-5">
      <h1 className="text-3xl mb-10">Leave A Comment</h1>
      <form className="my-3" onSubmit={handleBlogComment}>
        <label className="text-xl">Comment*</label>
        <textarea
          type="text"
          name="comment"
          className="w-full h-44 bg-white border-2 border-gray-200 p-5 my-3"
          required={true}
        ></textarea>
        <div className="flex w-full justify-around gap-x-5 mb-3">
          <div className="w-full">
            <label className="text-xl">Name*</label>
            <input
              type="text"
              name="name"
              className="w-full  bg-white border-2 border-gray-200 p-5 mt-3"
              required={true}
            ></input>
          </div>
          <div className="w-full">
            <label className="text-xl">Email*</label>
            <input
              type="text"
              name="email"
              className="w-full  bg-white border-2 border-gray-200 p-5 mt-3"
              required={true}
            ></input>
          </div>
        </div>
        <label className="text-xl">Website*</label>
        <input
          type="text"
          name="website"
          className="w-full  bg-white border-2 border-gray-200 p-5 mt-3"
        ></input>
        <input
          className="my-5 bg-secondary text-white font-bold p-3"
          type="submit"
          value="Post A Comment"
        ></input>
      </form>
    </div>
  )
}
