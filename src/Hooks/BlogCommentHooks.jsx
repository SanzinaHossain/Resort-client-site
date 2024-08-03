const handleBlogComment = (e, commentToken) => {
  e.preventDefault()
  const name = e.target.name.value
  const email = e.target.email.value
  const comment = e.target.comment.value
  const website = e.target.website.value

  const BlogCommentData = {
    name,
    comment,
    email,
    website,
    commentToken,
  }

  fetch("https://resort-server-delta.vercel.app/blogComments", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(BlogCommentData),
  })
    .then((res) => res.json())
    .then((data) => {
      {
        console.log(data)
        if (data) {
          e.target.reset()
          console.log(data)
        } else {
          alert("comment not successful")
        }
      }
    })
  // e.target.reset()
}

export { handleBlogComment }
