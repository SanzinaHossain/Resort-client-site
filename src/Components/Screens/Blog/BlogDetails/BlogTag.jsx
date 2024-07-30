import { BlogTags } from "../BlogData"

export default function BlogTag() {
  return (
    <div className="p-5 flex items-center gap-x-2 flex-wrap text-black bg-gray-200 h-44">
      <p>Tags: </p>
      {BlogTags.map((tag, index) => (
        <div className="p-2 text-black bg-white" key={index}>
          {tag.value}
        </div>
      ))}
    </div>
  )
}
