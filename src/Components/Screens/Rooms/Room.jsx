import SectionCover from "../../Molecules/SectionCover/SectionCover"
import coverImage from "../../../assets/background3.avif"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Loading from "../../Molecules/Loading"
import RoomExtraFacility from "./RoomExtraFacility"

export default function Room() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [roomData, setRoomData] = useState()
  fetch("https://resort-server-delta.vercel.app/rooms")
    .then((res) => res.json())
    .then((data) => {
      setRoomData(data)
      setLoading(false)
    })
  return (
    <div>
      <SectionCover
        title="Rooms"
        subTitle="Explore Our Room Category"
        image={coverImage}
      />
      <div className="p-10 bg-white grid lg:grid-cols-2 justify-evenly place-items-center gap-10 grid-cols-1">
        <Loading isLoading={loading} />
        {roomData?.map((room, index) => (
          <div key={index}>
            <img src={room.image} />

            <div className="flex flex-col justify-center items-center p-5">
              <h1 className="text-3xl text-black font-bold text-center">
                {room.title}
              </h1>
              <h1 className="text-lg text-black text-center my-3">
                {room.description}
              </h1>
              <RoomExtraFacility room={room} />
              <button
                onClick={() => navigate(`/roomDetails/${room._id}`)}
                className="border-2 border-secondary p-2 my-3 text-black hover:bg-secondary hover:text-white hover:font-bold"
              >
                Room Details...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
