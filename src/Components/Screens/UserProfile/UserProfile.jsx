import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../Context/AuthProvider"
import SectionCover from "../../Molecules/SectionCover/SectionCover"
import coverImage from "../../../assets/background3.avif"
import { PiUsersFill } from "react-icons/pi"
import { handleCancelBooking } from "../../../Hooks/CancelBookingHooks"

export default function UserProfile() {
  const [userData, setUserData] = useState()
  const { user } = useContext(AuthContext)

  fetch(
    `https://resort-server-delta.vercel.app/roomBooking?email=${user.email}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setUserData(data)
      } else {
        console.log("No Data Found")
      }
    })

  return (
    <div className="bg-white">
      <SectionCover
        title="User Profile"
        subTitle="Explore Your Booking Confirmation"
        image={coverImage}
      />
      <div className="p-10 flex flex-col justify-center items-center ">
        <div className=" text-black text-xl w-[500px] border-2 p-5">
          <div className="flex justify-center items-center flex-col">
            <PiUsersFill className="text-7xl text-primary" />
            <h1> {userData?.name}</h1>
            <h1>Email: {user?.email}</h1>
            <h1>Mobile Number: {userData?.mobile_no}</h1>
          </div>
          <div className="divider divider-success"></div>
          <div className="overflow-x-auto"></div>
          <div className="justify-items-start">
            <h1>
              <span className="font-bold">Room Type : </span>
              {userData?.room_type}
            </h1>
            <h1>
              <span className="font-bold">CheckIn Date : </span>
              {userData?.checkIn_date}
            </h1>
            <h1>
              <span className="font-bold">CheckOut Date : </span>
              {userData?.checkOut_date}
            </h1>
            <h1>
              <span className="font-bold">Total Person : </span>
              {userData?.total_person}
            </h1>
            <h1>
              <span className="font-bold">Total Cost : </span>$
              {userData?.total_cost}
            </h1>
            <div className="mt-5 flex gap-x-5">
              <button className="p-2 bg-black text-white ">Payment</button>
              <button
                onClick={() => handleCancelBooking(userData?._id, setUserData)}
                className="p-2 bg-black text-white "
              >
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
