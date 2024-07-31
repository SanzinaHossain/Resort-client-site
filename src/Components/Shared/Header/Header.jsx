import { useContext, useState } from "react"
import { HeaderStyles } from "./HeaderStyles"
import HeaderIcon from "./HeaderIcon"
import { routes } from "./HeaderData"
import HeaderLink from "./HeaderLink"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../../Context/AuthProvider"
import { FiLogOut } from "react-icons/fi"
import { FaRegUserCircle, FaSignOutAlt } from "react-icons/fa"
import LoginHooks from "../../../Hooks/LoginHooks"

export default function Header() {
  const [open, setOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const { handleLogOut } = LoginHooks()
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
          {user ? (
            <div className="flex gap-x-5 justify-center items-center">
              <FaRegUserCircle className="text-2xl" />
              <NavLink
                onClick={() => handleLogOut()}
                className={HeaderStyles.loginLink}
              >
                <FaSignOutAlt className="text-2xl" />
              </NavLink>
            </div>
          ) : (
            <NavLink to="/login" className={HeaderStyles.loginLink}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  )
}
