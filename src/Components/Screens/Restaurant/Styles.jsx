export const RestaurantHeaderStyle = {
  container: "flex flex-col justify-center items-center p-10",
  title: "text-black text-4xl mt-10 text-center playwrite-gb-j-title",
  description: "text-gray-800 lg:text-center my-5 text-justify ",
  detailsContainer:
    "flex lg:flex-row flex-col  items-center  gap-x-10 py-5 justify-center gap-y-5",
  detailsTitle: "text-black font-bold text-xl",
  detailsValue: "text-black text-center my-2",
  button:
    "border-2 border-secondary p-2 mt-5 bg-secondary text-white  font-bold",
}

export const FoodItemsButtonStyle = {
  container:
    " flex lg:gap-x-10 gap-x-2 w-[100vw] justify-center items-center lg:px-0 px-2 my-5 lg:w-auto",
  buttonStyle:
    "w-24 border-2 border-secondary p-2 mt-5 bg-secondary text-white  font-bold",
}

export const RestaurantMenuStyle = {
  container: "px-10 flex flex-col justify-center items-center lg:py-24 py-10",
  titleStyle: "text-black text-center text-4xl playwrite-gb-j-title",
  descriptionStyle: "text-black text-center mt-3 justify-center",
  foodMenuContainer:
    "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-start place-items-center mt-10 gap-5",
}

export const SingleFoodMenuStyle = {
  container:
    "justify-center items-center flex lg:flex-row flex-col gap-x-5 w-full",
  imageContainer: "h-24 w-24",
  menuContainer: "lg:pt-0 pt-5 w-2/3",
  titleStyle:
    "text-black lg:text-2xl text-xl font-bold lg:text-start text-center playwrite-gb-j-title",
  descriptionStyle: "text-secondary text-center lg:text-start ",
  foodPriceStyle: "text-black text-2xl font-bold",
}

export const RestaurantCustomerServiceStyle = {
  container: "grid lg:grid-cols-2 grid-cols-1 pt-20",
  imageContainer: "h-full",
  dataContainer: "bg-secondary p-10",
  subTitleStyle: "text-white text-xl",
  titleStyle: "text-primary text-3xl playwrite-gb-j-title my-5",
  descriptionStyle: "text-white text-justify",
  serviceContainer:
    "grid lg:grid-cols-2 justify-items-start mt-7 gap-y-3 grid-cols-1",
  serviceDataContainer: "flex justify-center items-center gap-x-2",
  iconStyle: "text-primary text-2xl",
  textStyle: "text-white",
}

export const RestaurantClientReviewStyle = {
  container: "grid lg:grid-cols-2 grid-cols-1 mt-10",
  reviewContainer: "bg-black p-10 w-full",
  singleReviewContainer: "lg:h-96 py-5 h-auto justify-center items-center",
  titleStyle:
    "text-primary playwrite-gb-j-title text-2xl font-bold text-justify",
  reviewStyle: "text-white text-justify mt-3",
  nameStyle: "text-white text-2xl my-3 playwrite-gb-j-title text-start",
  ratingContainer: "flex items-center gap-x-1 mt-5 text-primary",
}
