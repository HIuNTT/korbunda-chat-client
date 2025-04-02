import { Outlet } from "react-router"

import Sidebar from "./Sidebar"

export default function HomeLayout() {
  return (
    <div className="grid h-screen grid-cols-[72px_1fr] overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  )
}
