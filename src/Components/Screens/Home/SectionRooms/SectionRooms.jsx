import SectionHeader from "../../../Molecules/SectionHeader/SectionHeader"
import { roomData } from "./SectionRoomsData"
import { roomCardStyle } from "./Styles"
import SectionRoomCard from "./SectionRoomCard"

export default function SectionRooms() {
  return (
    <div className={roomCardStyle.container}>
      <SectionHeader />
      <div className={roomCardStyle.cardContainer}>
        {roomData.map((room) => (
          <SectionRoomCard room={room} />
        ))}
      </div>
    </div>
  )
}
