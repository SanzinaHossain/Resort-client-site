import { useLocation } from "react-router-dom"
import coverImage from "../../../assets/background3.avif"
import SectionCover from "../../Molecules/SectionCover/SectionCover"

export default function RoomDetails() {
  const location = useLocation()
  const roomData = location.state
  return (
    <div>
      <SectionCover
        title="Room Details"
        subTitle="Explore Our Room Facilities"
        image={coverImage}
      />
      <div className="bg-white p-10">
        <img src={roomData.image} />
      </div>
    </div>
  )
}
