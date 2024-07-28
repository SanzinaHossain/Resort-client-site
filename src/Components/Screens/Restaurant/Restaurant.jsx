import SectionCover from "../../Molecules/SectionCover/SectionCover"
import coverImage from "../../../assets/background.jpg"
import RestaurantHeader from "./RestaurantHeader"
import RestaurantCustomerService from "./RestaurantCustomerService"
import RestaurantMenu from "./RestaurantMenu"

export default function Restaurant() {
  return (
    <div className="bg-white">
      <SectionCover
        title="Restaurants and Bar"
        subTitle="Explore Our luxurious Food Menu  "
        image={coverImage}
      />
      <RestaurantHeader />
      <RestaurantCustomerService />
      <RestaurantMenu />
    </div>
  )
}
