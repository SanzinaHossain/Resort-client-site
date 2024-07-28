import React from "react"
import { BsStarFill } from "react-icons/bs"
import { RestaurantClientReviewStyle } from "./Styles"

export default function SingleReview({ client, key }) {
  return (
    <div
      key={key}
      className={RestaurantClientReviewStyle.singleReviewContainer}
    >
      <p className={RestaurantClientReviewStyle.titleStyle}>{client.title} </p>
      <p className={RestaurantClientReviewStyle.reviewStyle}>{client.review}</p>
      <div className={RestaurantClientReviewStyle.ratingContainer}>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
      </div>
      <p className={RestaurantClientReviewStyle.nameStyle}>{client.name}</p>
    </div>
  )
}
