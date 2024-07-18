import { roomCardStyle } from "./Styles"

//  button details function contains button function and cost of room

function RoomButtonDetails({ room }) {
  return (
    <div className={roomCardStyle.roomButtonDetailsContainer}>
      <p className={roomCardStyle.roomButtonDetailsText}>
        {room.cost}/
        <sub className={roomCardStyle.roomButtonDetailsSubText}>Night</sub>
      </p>
      <button className={roomCardStyle.buttonStyle}>View Details...</button>
    </div>
  )
}

// RoomDetails function contains guest, bed and bath number value

function RoomDetails({ room }) {
  return (
    <div className={roomCardStyle.roomDetailsContainer}>
      {room.facilities.map((facility) => {
        const IconComponent = facility.icon
        return (
          <p className={roomCardStyle.roomDetailsText}>
            <IconComponent className={roomCardStyle.roomDetailsIcon} />
            {facility.title}
          </p>
        )
      })}
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
        <RoomDetails room={room} />
        <RoomButtonDetails room={room} />
      </div>
    </div>
  )
}
