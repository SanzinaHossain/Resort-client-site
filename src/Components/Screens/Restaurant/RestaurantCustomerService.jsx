import image from "../../../assets/restaurant/restaurant1.webp"
import { AiOutlineCheck } from "react-icons/ai"
import { restaurantCustomerService } from "./RestaurantData"
import { RestaurantCustomerServiceStyle } from "./Styles"

export default function RestaurantCustomerService() {
  return (
    <div className={RestaurantCustomerServiceStyle.container}>
      <img
        className={RestaurantCustomerServiceStyle.imageContainer}
        src={image}
      />

      <div className={RestaurantCustomerServiceStyle.dataContainer}>
        <p className={RestaurantCustomerServiceStyle.subTitleStyle}>
          {restaurantCustomerService.subTitle}
        </p>
        <p className={RestaurantCustomerServiceStyle.titleStyle}>
          {restaurantCustomerService.title}
        </p>
        <p className={RestaurantCustomerServiceStyle.descriptionStyle}>
          {restaurantCustomerService.description}
        </p>
        <div className={RestaurantCustomerServiceStyle.serviceContainer}>
          {restaurantCustomerService.services.map((service) => (
            <div
              className={RestaurantCustomerServiceStyle.serviceDataContainer}
            >
              <AiOutlineCheck
                className={RestaurantCustomerServiceStyle.iconStyle}
              />
              <p className={RestaurantCustomerServiceStyle.textStyle}>
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
