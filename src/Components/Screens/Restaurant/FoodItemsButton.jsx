import {
  BreakfastFoodItems,
  DrinksItems,
  LunchFoodItems,
} from "./RestaurantData"
import { FoodItemsButtonStyle } from "./Styles"

export default function FoodItemsButton({ setFoodItems }) {
  return (
    <div className={FoodItemsButtonStyle.container}>
      <button
        onClick={() => setFoodItems(BreakfastFoodItems)}
        className={FoodItemsButtonStyle.buttonStyle}
      >
        BreakFast
      </button>
      <button
        onClick={() => setFoodItems(LunchFoodItems)}
        className={FoodItemsButtonStyle.buttonStyle}
      >
        Lunch
      </button>
      <button
        onClick={() => setFoodItems(BreakfastFoodItems)}
        className={FoodItemsButtonStyle.buttonStyle}
      >
        Dinner
      </button>
      <button
        onClick={() => setFoodItems(DrinksItems)}
        className={FoodItemsButtonStyle.buttonStyle}
      >
        Drinks
      </button>
    </div>
  )
}
