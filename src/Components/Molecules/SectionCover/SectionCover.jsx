export default function SectionCover({ title, subTitle, image }) {
  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-70"></div>
      <div className="text-center py-32">
        <div className="max-w-screen-lg text-white">
          <h1 className="lg:text-4xl text-2xl">{title}</h1>
          <h2 className="lg:text-6xl text-4xl font-bold mt-4 pacifico-regular ">
            {subTitle}
          </h2>
        </div>
      </div>
    </div>
  )
}
