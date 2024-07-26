import { contactData } from "./ContactData"
import { ContactStyle } from "./Styles"

export default function ContactInformation() {
  return (
    <div className={ContactStyle.contactInformationContainer}>
      <h1 className={ContactStyle.ContactInformationTitle}>
        Contact Information
      </h1>
      <div className={ContactStyle.contactInformationDetailsContainer}>
        {contactData.map((contact) => {
          const IconComponent = contact.icon
          return (
            <div key={contact.id} className={ContactStyle.dataContainer}>
              <IconComponent className={ContactStyle.iconStyle} />
              <h1 className={ContactStyle.dataTitle}>{contact.title}</h1>
              <p className={ContactStyle.dataInformation}>{contact.data}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
