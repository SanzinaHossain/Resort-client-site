import { useContext, useState } from "react"
import { HeaderStyles } from "./HeaderStyles"
import HeaderIcon from "./HeaderIcon"
import { routes } from "./HeaderData"
import HeaderLink from "./HeaderLink"
import { NavLink } from "react-router-dom"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={HeaderStyles.headerContainer}>
      <div className="flex justify-between">
        <HeaderIcon open={open} setOpen={setOpen} />
        <div className={HeaderStyles.titleTextContainer}>
          <h1 className={HeaderStyles.titleText}>🌴 Vacay</h1>
        </div>
        <ul
          className={`${HeaderStyles.container} ${
            open ? HeaderStyles.headerOpen : HeaderStyles.headerOff
          }`}
        >
          <div className="flex lg:flex-row md:flex-row flex-col gap-y-2">
            {routes.map((route) => (
              <HeaderLink key={route.id} route={route} />
            ))}
          </div>
        </ul>
        <div className={HeaderStyles.buttonContainer}>
          <NavLink to="/login" className={HeaderStyles.loginLink}>
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
