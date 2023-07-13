import SectionHeading from "../../Common/SectionHeading"
import SingleDetails from "./SingleDetails"

export default function SectionRestaurant() {
  return (
    <div className="grid justify-items-center mt-24 mb-24 w-[100%] ">
      <SectionHeading paragraph="Our Restaurant Heaven" />
      <div className="grid justify-items-center w-[100%]">
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-evenly gap-12 w-[90%]">
          <SingleDetails />
          <SingleDetails />
          <SingleDetails />
          <SingleDetails />
        </div>
      </div>
    </div>
  )
}
