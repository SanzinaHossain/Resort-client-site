import { useContext, useState } from "react"
import { AuthContext } from "../../../Context/AuthProvider"

export default function UserProfile() {
  const [userData, setUserData] = useState()
  const { user } = useContext(AuthContext)

  fetch(`http://localhost:5000/roomBooking?email=${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setUserData(data)
    })
  return <div>{userData?.room_type}</div>
}
