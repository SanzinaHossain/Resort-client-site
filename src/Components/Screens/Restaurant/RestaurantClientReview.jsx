import image from "../../../assets/restaurant/restaurant3.webp"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { clientReviews } from "./RestaurantData"
import { RestaurantClientReviewStyle } from "./Styles"
import SingleReview from "./SingleReview"

export default function RestaurantClientReview() {
  return (
    <div className={RestaurantClientReviewStyle.container}>
      <img
        src={image}
        alt="Restaurant"
        className="w-full h-full object-cover"
      />

      <div className={RestaurantClientReviewStyle.reviewContainer}>
        <Carousel showArrows={false} showThumbs={false} showStatus={false}>
          {clientReviews.map((client, index) => (
            <SingleReview client={client} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}
