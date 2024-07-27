import { restaurantHeaderData } from "./RestaurantData"
import { RestaurantHeaderStyle } from "./Styles"

export default function RestaurantHeader() {
  return (
    <div className={RestaurantHeaderStyle.container}>
      <h1 className={RestaurantHeaderStyle.title}>
        {restaurantHeaderData.title}
      </h1>

      <p className={RestaurantHeaderStyle.description}>
        {restaurantHeaderData.description}
      </p>

      <div className={RestaurantHeaderStyle.detailsContainer}>
        {restaurantHeaderData.details.map((item) => (
          <div>
            <p className={RestaurantHeaderStyle.detailsTitle}>{item.title}</p>
            <p className={RestaurantHeaderStyle.detailsValue}>{item.value}</p>
          </div>
        ))}
      </div>

      <button className={RestaurantHeaderStyle.button}>
        Book A Table Online
      </button>
    </div>
  )
}
