import React from "react"
import { FaBath, FaBed, FaUserFriends } from "react-icons/fa"

const RoomExtraFacility = ({ room }) => {
  return (
    <div className="flex items-center my-2 lg:gap-x-5 gap-x-2">
      <p className="flex gap-x-2 items-center text-black">
        <FaUserFriends className="text-primary text-xl" />
        {room.guest} Guest
      </p>
      <p className="flex gap-x-2 items-center text-black">
        <FaBed className="text-primary text-xl" />
        {room.bed} Bed
      </p>
      <p className="flex gap-x-2 items-center text-black">
        <FaBath className="text-primary text-xl" />
        {room.bath} Bath
      </p>
    </div>
  )
}

export default RoomExtraFacility
