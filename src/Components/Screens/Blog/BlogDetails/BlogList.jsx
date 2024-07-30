import { blogData } from "../BlogData"

export default function BlogList() {
  return (
    <div className="p-5 bg-gray-200 my-10">
      {blogData.map((blog, index) => (
        <div
          key={index}
          className="flex w-full items-center gap-x-5 my-5 text-black"
        >
          <img src={blog.image} className="w-10 h-10" />
          <p>{blog.name}</p>
        </div>
      ))}
    </div>
  )
}
