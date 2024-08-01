import { useParams } from "react-router-dom"
import coverImage from "../../../assets/background3.avif"
import Loading from "../../Molecules/Loading"
import SectionCover from "../../Molecules/SectionCover/SectionCover"
import { useState } from "react"
import RoomReservationForm from "./RoomReservationForm"

export default function RoomDetails() {
  const { id } = useParams()
  const [roomData, setRoomData] = useState()
  const [loading, setLoading] = useState(true)

  fetch(`http://localhost:5000/rooms/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setRoomData(data)
      setLoading(false)
    })

  return (
    <div>
      <SectionCover
        title="Room Details"
        subTitle="Explore Our Room Facilities"
        image={coverImage}
      />
      <div className="bg-white p-10">
        {roomData ? (
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="col-span-2">
              <img className="w-full" src={roomData?.image} />
            </div>
            <div className="px-10 text-black flex flex-col items-center ">
              <RoomReservationForm />
            </div>
          </div>
        ) : (
          <Loading isLoading={loading} />
        )}
      </div>
    </div>
  )
}
