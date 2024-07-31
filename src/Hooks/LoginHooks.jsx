export const handleLogin = (e) => {
  e.preventDefault()
  const email = e.target.email.value
  const password = e.target.password.value
  const loginInfo = { email, password }
  console.log(loginInfo)
  e.target.reset()
}

export const handleSignUp = (e) => {
  e.preventDefault()
  const name = e.target.name.value
  const email = e.target.email.value
  const password = e.target.password.value
  const SignUpInfo = { name, email, password }
  console.log(SignUpInfo)
  e.target.reset()
}
