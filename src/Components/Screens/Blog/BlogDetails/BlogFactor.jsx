import { AiOutlineCheck } from "react-icons/ai"
import { blogFactor } from "../BlogData"
import { BlogFactorStyle } from "../Styles"

export default function BlogFactor() {
  return (
    <div className={BlogFactorStyle.container}>
      <p className={BlogFactorStyle.titleStyle}>
        What factor should be keep in mind
      </p>
      {blogFactor.map((factor, index) => (
        <div key={index} className={BlogFactorStyle.dataContainer}>
          <AiOutlineCheck className={BlogFactorStyle.iconStyle} />
          <p>{factor.value}</p>
        </div>
      ))}
    </div>
  )
}
