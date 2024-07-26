import { handleContactInfo } from "../../../Hooks/ContactFormHooks"
import { ContactStyle } from "./Styles"

export default function ContactForm() {
  return (
    <form onSubmit={handleContactInfo} className={ContactStyle.formStyle}>
      <div className={ContactStyle.contactFormContainer}>
        <p className={ContactStyle.contactFormTitle}>Get In Touch</p>
        <div className={ContactStyle.ContactFormWrapTextArea}>
          <input
            className={ContactStyle.contactFormInput}
            type="text"
            name="name"
            placeholder="Your Name"
          ></input>
          <input
            className={ContactStyle.contactFormInput}
            type="text"
            name="contact"
            placeholder="Your Contact No"
          ></input>
        </div>
        <input
          className={ContactStyle.contactFormInput}
          type="email"
          name="email"
          placeholder="Your Email"
        ></input>
        <textarea
          type="text"
          name="message"
          className={ContactStyle.contactFormTextArea}
          placeholder="Your Message"
        ></textarea>
        <input
          className={ContactStyle.contactFormButton}
          type="submit"
          value="Send Message"
        ></input>
      </div>
    </form>
  )
}
