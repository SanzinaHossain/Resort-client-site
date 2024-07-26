const handleContactInfo = (e) => {
  e.preventDefault()
  const name = e.target.name.value
  const contact = e.target.name.value
  const email = e.target.email.value
  const message = e.target.message.value
  const contactInfo = { name, contact, email, message }
  console.log(contactInfo)
  e.target.reset()
}

export { handleContactInfo }
