import { useParams } from "react-router-dom"
import coverImage from "../../../assets/background3.avif"
import Loading from "../../Molecules/Loading"
import SectionCover from "../../Molecules/SectionCover/SectionCover"
import { useState } from "react"
import RoomReservationForm from "./RoomReservationForm"
import RoomExtraFacility from "./RoomExtraFacility"
import RoomFactor from "./RoomFactor"
import { roomCardStyle } from "../Home/SectionRooms/Styles"

export default function RoomDetails({}) {
  const { id } = useParams()
  const [roomData, setRoomData] = useState()
  const [loading, setLoading] = useState(true)

  fetch(`https://resort-server-delta.vercel.app/rooms/${id}`)
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
              <div className="py-10 text-black">
                <p className="text-3xl text-primary mb-3">{roomData.title}</p>
                <p className={roomCardStyle.roomButtonDetailsText}>
                  {roomData.cost}/
                  <sub className={roomCardStyle.roomButtonDetailsSubText}>
                    Night
                  </sub>
                </p>
                <p className="text-justify my-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis repellat nisi, adipisci qui asperiores temporibus ut
                  reiciendis a blanditiis quidem sequi dolorem ipsa quisquam?
                  Possimus voluptates blanditiis maiores ducimus officiis,
                  ratione aut quam voluptatum ipsa, ut sed atque, rerum est?
                </p>
                <RoomExtraFacility room={roomData} />
                <RoomFactor />
                <p className="text-justify my-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis repellat nisi, adipisci qui asperiores temporibus ut
                  reiciendis a blanditiis quidem sequi dolorem ipsa quisquam?
                  Possimus voluptates blanditiis maiores ducimus officiis,
                  ratione aut quam voluptatum ipsa, ut sed atque, rerum est?
                </p>
              </div>
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
