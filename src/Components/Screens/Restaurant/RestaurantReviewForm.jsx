import React from "react"

export default function RestaurantReviewForm() {
  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <form className=" flex flex-col gap-y-5">
        <input
          className="bg-white border-2 border-gray-500 w-[500px] p-3"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        ></input>
        <input
          className="bg-white border-2 border-gray-500 w-[500px] p-3"
          type="email"
          name="email"
          placeholder="Enter Your Email"
        ></input>
        <input
          className="bg-white border-2 border-primary w-[500px] p-3"
          type="text"
          name="address"
          placeholder="Your Address"
        ></input>
      </form>
    </div>
  )
}
