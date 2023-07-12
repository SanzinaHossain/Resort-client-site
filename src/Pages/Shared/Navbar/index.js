import logo from "../../../images/Home/p3.png"
import { AiFillTwitterCircle } from "react-icons/ai"
import { SiFacebook } from "react-icons/si"
import { FaInstagramSquare } from "react-icons/fa"
export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <img
            class="normal-case text-xl text-blue-900 w-24 h-16"
            src={logo}
            alt="logo"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:text-blue-800 active text-lg">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-blue-800">
            <a href="/">Rooms</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end lg-flex">
        <a
          class="hover:text-blue-500 text-2xl px-3"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SanzinaHossain?tab=repositories"
        >
          <SiFacebook></SiFacebook>
        </a>
        <a
          class="hover:text-blue-500 text-3xl px-3"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sanzina-hossain-335909229/"
        >
          <AiFillTwitterCircle></AiFillTwitterCircle>
        </a>
        <a
          class="hover:text-blue-500 text-2xl px-3"
          target="_blank"
          rel="noopener noreferrer"
          href="https://codeforces.com/profile/Sanzina_67"
        >
          <FaInstagramSquare></FaInstagramSquare>
        </a>
      </div>
    </div>
  )
}
