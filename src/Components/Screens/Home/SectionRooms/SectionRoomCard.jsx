export default function SectionRoomCard({ room }) {
  return (
    <div key={room.id} className=" bg-white shadow-xl ">
      <figure>
        <img src={room.image} alt="Shoes" />
      </figure>
      <div className="card-body bg-white text-black text-justify">
        <h2 className="card-title text-2xl text-primary font-bold">
          {room.title}
        </h2>
        <p>{room.description}</p>
        <div className="flex items-center my-2">
          {room.facilities.map((facility) => {
            const IconComponent = facility.icon
            return (
              <p className="flex gap-x-2  items-center">
                <IconComponent className="text-primary  " />
                {facility.title}
              </p>
            )
          })}
        </div>
        <div className="card-actions justify-end mt-2">
          <p className="text-2xl">
            {room.cost}/<sub className="text-primary font-bold">Night</sub>
          </p>
          <button className="border-2 border-primary p-2">
            View Details...
          </button>
        </div>
      </div>
    </div>
  )
}
