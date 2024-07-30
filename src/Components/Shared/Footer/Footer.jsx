import { FooterData } from "./FooterData"
import FooterNav from "./FooterNav"
import FooterSocialMediaIcon from "./FooterSocialMediaIcon"
import { FooterStyle } from "./FooterStyle"
import FooterSubscriberForm from "./FooterSubscribeForm"

export default function Footer() {
  return (
    <footer className={FooterStyle.footerContainer}>
      <FooterSubscriberForm />
      <div className="divider"></div>
      <div className="footer">
        <aside>
          <p className={FooterStyle.footerTitle}>Vacay</p>
          <p className="text-white">
            There are many variations of passages <br />
            of Lorem Ipsum , but the majority have
            <br /> suffered alteration in some form.
          </p>
          <FooterSocialMediaIcon />
        </aside>

        {FooterData.map((data) => (
          <FooterNav key={data.key} navData={data} />
        ))}
      </div>
      <div className={FooterStyle.footerDivider}></div>
      <div className={FooterStyle.footerReserved}>
        <p className="col-span-4 text-white">
          @2024 Vacay, All Rights Reserved by Sanzina
        </p>
        <p className="text-white">Powered By JobHub</p>
      </div>
    </footer>
  )
}
