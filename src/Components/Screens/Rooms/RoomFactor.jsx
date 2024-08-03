import { AiOutlineCheck } from "react-icons/ai"
import { BlogFactorStyle } from "../Blog/Styles"
import { roomFactor } from "./RoomData"

export default function RoomFactor() {
  return (
    <div className={BlogFactorStyle.container}>
      <p className={BlogFactorStyle.titleStyle}>
        What factor should be keep in mind
      </p>
      {roomFactor.map((factor, index) => (
        <div key={index} className={BlogFactorStyle.dataContainer}>
          <AiOutlineCheck className={BlogFactorStyle.iconStyle} />
          <p>{factor.value}</p>
        </div>
      ))}
    </div>
  )
}
