const handleBlogComment = (e) => {
  e.preventDefault()
  const name = e.target.name.value
  const email = e.target.email.value
  const comment = e.target.comment.value
  const website = e.target.website.value
  const BlogComment = { name, comment, email, website }
  console.log(BlogComment)
  e.target.reset()
}

export { handleBlogComment }
