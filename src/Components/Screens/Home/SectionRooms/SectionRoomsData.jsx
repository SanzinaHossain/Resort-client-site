import room6 from "../../../../assets/rooms/room6.jpg"
import room4 from "../../../../assets/rooms/room4.jpg"
import room5 from "../../../../assets/rooms/room5.jpg"
import { FaRegUser } from "react-icons/fa"
import { IoBedOutline } from "react-icons/io5"
import { LuBath } from "react-icons/lu"
export const roomData = [
  {
    image: room4,
    title: "Beach Villa Room",
    description:
      " This is a luxurious room with wifi, morning breakfast,spa and other facility included.",
    cost: "$25",
    facilities: [
      {
        title: "1 Guest",
        icon: FaRegUser,
      },
      {
        title: "2 Bed",
        icon: IoBedOutline,
      },
      {
        title: "1 Bath",
        icon: LuBath,
      },
    ],
  },
  {
    image: room5,
    title: "Superior Panorama Room",
    description:
      " This is a luxurious room with wifi, morning breakfast,spa and other facility included.",
    cost: "$25",
    facilities: [
      {
        title: "1 Guest",
        icon: FaRegUser,
      },
      {
        title: "2 Bed",
        icon: IoBedOutline,
      },
      {
        title: "1 Bath",
        icon: LuBath,
      },
    ],
  },
  {
    image: room6,
    title: "Presidential Suite",
    description:
      "This is a luxurious room with wifi, morning breakfast, spa and other facility included.",
    cost: "$25",
    facilities: [
      {
        title: "1 Guest",
        icon: FaRegUser,
      },
      {
        title: "2 Bed",
        icon: IoBedOutline,
      },
      {
        title: "1 Bath",
        icon: LuBath,
      },
    ],
  },
]
