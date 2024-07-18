import { NavLink } from "react-router-dom"
import { HeaderStyles } from "./HeaderStyles"

export default function HeaderLink({ route }) {
  return (
    <li className={HeaderStyles.pathText} key={route.id}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? HeaderStyles.pathActive
            : "lg:text-white md:text-white text-black"
        }
        to={route.path}
      >
        {route.name}
      </NavLink>
    </li>
  )
}
