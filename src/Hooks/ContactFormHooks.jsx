const handleContactInfo = (e) => {
  e.preventDefault()
  const name = e.target.name.value
  const contact = e.target.name.value
  const email = e.target.email.value
  const message = e.target.message.value
  const contactInfo = { name, contact, email, message }
  console.log(contactInfo)

  fetch("https://resort-server-delta.vercel.app/userContacts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(contactInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      {
        console.log(data)
        if (data) {
          e.target.reset()
          alert("Message Send Successfully")
        } else {
          console.log("Send Message not successful")
        }
      }
    })
}

export { handleContactInfo }
