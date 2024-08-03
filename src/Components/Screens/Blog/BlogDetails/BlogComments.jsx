import { useState } from "react"

export default function BlogComments({ id }) {
  const [blogComments, setBlogComments] = useState()

  fetch(`https://resort-server-delta.vercel.app/blogComment`)
    .then((res) => res.json())
    .then((data) => {
      const filterData = data.filter((d) => d.commentToken === id)
      console.log(filterData)
      setBlogComments(filterData)
    })

  return (
    <div className=" text-black">
      <p className="text-3xl ">Comments</p>
      <div className="divider"></div>
      {blogComments?.map((comment) => (
        <>
          <div>
            <p className="font-bold text-lg">{comment.name}</p>
            <p className="my-3">{comment.comment}</p>
            <div className="flex items-center gap-x-5">
              <p>{comment?.date}</p>
              <button className="text-primary">Reply</button>
            </div>
          </div>
          <div className="divider"></div>
        </>
      ))}
    </div>
  )
}
