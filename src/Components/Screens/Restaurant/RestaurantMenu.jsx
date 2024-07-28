import RestaurantHooks from "../../../Hooks/RestaurantFoodItemsHooks"
import FoodItemsButton from "./FoodItemsButton"
import { RestaurantMenuData } from "./RestaurantData"
import SingleFoodMenu from "./SingleFoodMenu"
import { RestaurantMenuStyle } from "./Styles"

export default function RestaurantMenu() {
  const { foodItems, setFoodItems } = RestaurantHooks()

  return (
    <div className={RestaurantMenuStyle.container}>
      <p className={RestaurantMenuStyle.titleStyle}>
        {RestaurantMenuData.title}
      </p>

      <p className={RestaurantMenuStyle.descriptionStyle}>
        {RestaurantMenuData.description}
      </p>

      <FoodItemsButton setFoodItems={setFoodItems} />

      <div className={RestaurantMenuStyle.foodMenuContainer}>
        {foodItems?.map((food, index) => (
          <SingleFoodMenu key={index} food={food} />
        ))}
      </div>
    </div>
  )
}
