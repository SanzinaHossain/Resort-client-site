import { FooterStyle } from "./FooterStyle"
import socialImage from "../../../assets/social.png"
export default function FooterSocialMediaIcon() {
  return (
    <div className={FooterStyle.footerIconContainer}>
      <img src={socialImage} />
    </div>
  )
}
