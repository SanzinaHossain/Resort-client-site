import SectionHeading from "../../Common/SectionHeading"
import video from "../../../images/video.mp4"
export default function SectionGallery() {
  return (
    <div className="grid justify-items-center mt-24 mb-24 ">
      <SectionHeading paragraph="See The Overview Of This Hotel" />
      <div className="w-full grid justify-items-center ">
        <video playsInline muted autoPlay loop className="w-full">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
