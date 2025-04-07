import { Outlet } from "react-router"

import MessengerCard from "../components/MessengerCard"

export default function Messages() {
  return (
    <div className="flex">
      <MessengerCard />
      <div className="w-full grow-[2] overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
