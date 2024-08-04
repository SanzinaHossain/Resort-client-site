import "./SectionHeader.css"
export default function SectionHeader() {
  return (
    <div className="mt-10 mb-20">
      <h1 className="text-center text-md text-primary font-bold title1 mb-2">
        Welcome to Vacay Site
      </h1>
      <h1 className="playwrite-gb-j-title text-center lg:text-5xl text-secondary text-3xl ">
        Our Luxurious Rooms
      </h1>
      <div className="flex mt-4 lg:px-0 lg:w-full w-[90vw] justify-center items-center  ">
        <div className="w-32 h-0.5 bg-primary"></div>
        <div className="w-32 h-0.5 bg-secondary mx-3"></div>
        <div className="w-32 h-0.5 bg-primary"></div>
      </div>
    </div>
  )
}
