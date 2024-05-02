import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Side_Contact } from "../ui/Side_Contact"

export const Layout = () => {
  return (
    <div>
      <Header />
      <Side_Contact />
      <Outlet />
      <Footer />
    </div>
  )
}