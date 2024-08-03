import { useNavigate } from "react-router-dom"
import { roomCardStyle } from "./Styles"

//  button details function contains button function and cost of room

function RoomButtonDetails({ room }) {
  const navigate = useNavigate()
  return (
    <div className={roomCardStyle.roomButtonDetailsContainer}>
      <p className={roomCardStyle.roomButtonDetailsText}>
        {room.cost}/
        <sub className={roomCardStyle.roomButtonDetailsSubText}>Night</sub>
      </p>
      <button
        onClick={() => navigate(`/roomDetails/${room._id}`)}
        className={roomCardStyle.buttonStyle}
      >
        View Details...
      </button>
    </div>
  )
}

// .................Main Function...........

export default function SectionRoomCard({ room }) {
  return (
    <div key={room.id} className={roomCardStyle.cardSingleContainer}>
      <figure>
        <img src={room.image} />
      </figure>
      <div className={roomCardStyle.cardDetailsContainer}>
        <h2 className={roomCardStyle.cardTitle}>{room.title}</h2>
        <p>{room.description}</p>
        <RoomButtonDetails room={room} />
      </div>
    </div>
  )
}
