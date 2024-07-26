import SectionCover from "../../Molecules/SectionCover/SectionCover"
import coverImage from "../../../assets/Cover.png"
import ContactForm from "./ContactForm"
import ContactInformation from "./ContactInformation"
import ContactMap from "./ContactMap"
import { ContactStyle } from "./Styles"

export default function Contact() {
  return (
    <div className={ContactStyle.container}>
      <SectionCover
        image={coverImage}
        title="Contact Us"
        subTitle="For Getting Better Facilities"
      />
      <ContactInformation />

      <div className={ContactStyle.formMainContainer}>
        <ContactForm />
      </div>

      <ContactMap />
    </div>
  )
}
