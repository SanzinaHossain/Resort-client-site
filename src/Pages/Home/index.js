import SectionGallery from "../Sections/SectionGallery"
import SectionHeader from "../Sections/SectionHeader"
import SectionQuality from "../Sections/SectionQuality"
import SectionRestaurant from "../Sections/SectionRestaurant"

export default function Home() {
  return (
    <>
      <SectionHeader />
      <SectionQuality />
      <SectionGallery />
      <SectionRestaurant />
    </>
  )
}
