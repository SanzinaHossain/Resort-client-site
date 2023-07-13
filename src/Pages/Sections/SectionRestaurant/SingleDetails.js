import React from "react"

export default function SingleDetails() {
  return (
    <>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 bg-blue-800 p-7 rounded-2xl">
        <div class="col-span-3 mx-auto">
          <div class="flex">
            <div class="mt-0 mr-5">
              <h1 class="text-yellow-500 text-right text-2xl ml-4 font-bold ">
                Delicious PenCake with Honey
              </h1>
              <h1 class="text-white text-right text-lg font-bold ml-4">
                We provide the perfect education for your child every day{" "}
              </h1>
              <h1 class="text-white text-right text-lg font-bold ml-4">
                Price : $20
              </h1>
            </div>
            <img
              class="h-28 w-28 rounded-full"
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="food"
            ></img>
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 bg-yellow-400 p-7 rounded-2xl">
        <div class="col-span-3 mx-auto">
          <div class="flex ">
            <img
              class="h-28 w-28 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LB0UOM3YJ_Y7d_iS1ZX4ngKvInS5UmvxqHKKE41Iry4qf6jcnPMtR737pP_YT1f85CM&usqp=CAU"
              alt="food"
            ></img>
            <div class="mt-0">
              <h1 class="text-blue-800 text-left text-2xl ml-4 font-bold ">
                Delicious PenCake with Honey
              </h1>
              <h1 class="text-white text-left text-lg font-bold ml-4">
                We provide the perfect education for your child every day{" "}
              </h1>
              <h1 class="text-white text-left text-lg font-bold ml-4">
                Price : $20
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
