export const handleLogin = (e) => {
  e.preventDefault()
  const email = e.target.email.value
  const password = e.target.password.value
  const loginInfo = { email, password }
  console.log(loginInfo)
  e.target.reset()
}
