import SectionHeader from "../../../Molecules/SectionHeader/SectionHeader"
import { roomCardStyle } from "./Styles"
import SectionRoomCard from "./SectionRoomCard"
import { useState } from "react"
import Loading from "../../../Molecules/Loading"

export default function SectionRooms() {
  const [loading, setLoading] = useState(true)
  const [roomData, setRoomData] = useState()
  fetch("https://resort-server-delta.vercel.app/rooms")
    .then((res) => res.json())
    .then((data) => {
      setRoomData(data.slice(-3))
      setLoading(false)
    })
  return (
    <div className={roomCardStyle.container}>
      <SectionHeader />
      <div className={roomCardStyle.cardContainer}>
        {roomData ? (
          roomData.map((room) => <SectionRoomCard room={room} />)
        ) : (
          <Loading isLoading={loading} />
        )}
      </div>
    </div>
  )
}
