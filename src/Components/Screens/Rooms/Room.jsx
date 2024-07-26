import SectionCover from "../../Molecules/SectionCover/SectionCover"
import coverImage from "../../../assets/background.jpg"
import { roomData } from "../Home/SectionRooms/SectionRoomsData"
import { roomCardStyle } from "../Home/SectionRooms/Styles"

export default function Room() {
  return (
    <div>
      <SectionCover
        title="Rooms"
        subTitle="Explore Our Room Category"
        image={coverImage}
      />
      <div className="p-10 bg-white">
        {roomData.map((room, id) => (
          <div
            className={
              id % 2 == 0
                ? "flex flex-row-reverse justify-evenly items-center w-[100%] gap-y-10 flex-wrap "
                : "flex justify-evenly items-center w-[100%]  gap-y-10 flex-wrap"
            }
          >
            <img className="lg:w-[50%] w-[100%]" src={room.image} />
            <div className="lg:w-[50%] w-[100%] lg:p-5 p-0">
              <h1 className=" text-3xl my-3 text-primary">{room.title}</h1>
              <h1 className="text-black text-xl ">{room.description}</h1>
              <ul className="text-black my-3 text-lg">
                <li>1. 24 Hours Electricity Services</li>
                <li>2. Free breakfast and lunch in buffet</li>
                <li>3. Unlimited pool time with costume</li>
                <li>4. 20% discount on mastercard pay</li>
              </ul>
              <div className="text-black flex gap-x-10 text-xl">
                {room.facilities.map((facility) => {
                  const IconComponent = facility.icon
                  return (
                    <p className={roomCardStyle.roomDetailsText}>
                      <IconComponent
                        className={roomCardStyle.roomDetailsIcon}
                      />
                      {facility.title}
                    </p>
                  )
                })}
              </div>
              <div className="flex flex-col gap-y-5 mt-5  text-black">
                <p className={roomCardStyle.roomButtonDetailsText}>
                  Per Night Cost: {room.cost}/
                  <sub className={roomCardStyle.roomButtonDetailsSubText}>
                    Night
                  </sub>
                </p>
                <button className="border-primary border-2 p-2 hover:bg-primary hover:text-white hover:font-bold">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
