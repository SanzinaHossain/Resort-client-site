import { FooterStyle } from "./FooterStyle"

export default function FooterNav({ navData }) {
  return (
    <nav>
      <h6 className={FooterStyle.footerNavTitle}>{navData.title}</h6>
      {navData.links.map((data, id) => (
        <a key={id} className={FooterStyle.footerLinkStyle}>
          {data.text}
        </a>
      ))}
    </nav>
  )
}
