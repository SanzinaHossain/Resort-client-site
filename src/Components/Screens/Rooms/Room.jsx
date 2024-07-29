import SectionCover from "../../Molecules/SectionCover/SectionCover"
import coverImage from "../../../assets/background.jpg"
import { RoomData } from "./RoomData"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
export default function Room() {
  return (
    <div>
      <SectionCover
        title="Rooms"
        subTitle="Explore Our Room Category"
        image={coverImage}
      />
      <div className="p-10 bg-white grid lg:grid-cols-2 justify-evenly place-items-center gap-10 grid-cols-1">
        {RoomData.map((room) => (
          <div>
            <img src={room.image} />

            <div className="flex flex-col justify-center items-center p-5">
              <h1 className="text-3xl text-black font-bold text-center">
                {room.title}
              </h1>
              <h1 className="text-lg text-black text-center my-3">
                {room.description}
              </h1>
              <div className="flex items-center my-2 lg:gap-x-5 gap-x-2">
                {room.facilities.map((facility) => {
                  const IconComponent = facility.icon
                  return (
                    <p className="flex gap-x-2 items-center text-black">
                      <IconComponent className="text-primary font-bold text-xl" />
                      {facility.title}
                    </p>
                  )
                })}
              </div>
              <button className="border-2 border-secondary p-2 my-3 text-black hover:bg-secondary hover:text-white hover:font-bold">
                Room Details...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
