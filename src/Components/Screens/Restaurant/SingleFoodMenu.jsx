import { SingleFoodMenuStyle } from "./Styles"

export default function SingleFoodMenu({ food }) {
  return (
    <div className={SingleFoodMenuStyle.container}>
      <div className={SingleFoodMenuStyle.imageContainer}>
        <img src={food.image} />
      </div>

      <div className={SingleFoodMenuStyle.menuContainer}>
        <p className={SingleFoodMenuStyle.titleStyle}>{food.food_name}</p>
        <p className={SingleFoodMenuStyle.descriptionStyle}>
          {food.description}
        </p>
      </div>

      <div>
        <p className={SingleFoodMenuStyle.foodPriceStyle}>{food.price}</p>
      </div>
    </div>
  )
}
