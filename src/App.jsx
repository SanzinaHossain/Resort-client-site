import { Outlet } from "react-router-dom"
import Header from "./Components/Shared/Header/Header"
import Footer from "./Components/Shared/Footer/Footer"

export default function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
