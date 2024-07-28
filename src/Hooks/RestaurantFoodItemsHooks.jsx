import { useState } from "react"
import { BreakfastFoodItems } from "../Components/Screens/Restaurant/RestaurantData"
export default function RestaurantHooks() {
  const [foodItems, setFoodItems] = useState(BreakfastFoodItems)
  return { foodItems, setFoodItems }
}
