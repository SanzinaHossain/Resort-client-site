import { useState } from "react"

export default function BlogComments({ id }) {
  const [blogComments, setBlogComments] = useState()

  fetch(`http://localhost:5000/blogComment`)
    .then((res) => res.json())
    .then((data) => {
      const filterData = data.filter((d) => d.commentToken === id)
      console.log(filterData)
      setBlogComments(filterData)
    })

  return (
    <div className="bg-gray-200 p-5 text-black">
      <p className="text-xl font-bold">Blog Comments</p>
      <div className="divider"></div>
      {blogComments?.map((comment) => (
        <div>
          <p>{comment.comment}</p>
          <p>{comment.name}</p>
        </div>
      ))}
    </div>
  )
}
