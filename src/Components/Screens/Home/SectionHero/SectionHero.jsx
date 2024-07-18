import background from "../../../../assets/background.jpg"
import SectionSearch from "./SectionSearch"
import { sectionTitle } from "./SectionData"

export default function SectionHero() {
  return (
    <div
      className="hero lg:min-h-screen md:min-h-screen max-h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="text-center py-32">
        <div className="max-w-screen-lg text-white">
          <h1 className="text-4xl font-bold ">{sectionTitle.title}</h1>
          <h2 className="text-6xl font-bold mt-2">{sectionTitle.subTitle}</h2>
          <p className="text-xl mt-4">{sectionTitle.paragraph}</p>
          <SectionSearch />
        </div>
      </div>
    </div>
  )
}
