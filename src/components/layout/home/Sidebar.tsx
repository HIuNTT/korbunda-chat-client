import { Divider } from "@heroui/react"

import { FaUsers } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import { IoNotifications } from "react-icons/io5"
import { useLocation, useNavigate } from "react-router"

import { nav } from "constants/nav"

import LogoIcon from "components/common/LogoIcon"

import SidebarItem from "./SidebarItem"

export default function Sidebar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="flex max-h-screen flex-col bg-default-100">
      <div className="flex h-full flex-col justify-between">
        <div className="mt-9 space-y-3 overflow-y-auto scrollbar-hide">
          <SidebarItem
            label="Messages"
            children={<LogoIcon />}
            isActive={pathname.startsWith(nav.MESSAGE)}
            handleClick={() => pathname !== nav.MESSAGE && navigate(nav.MESSAGE)}
          />
          <SidebarItem
            label="Friends"
            children={<FaUsers size={24} />}
            isActive={pathname.startsWith(nav.FRIEND)}
            handleClick={() => pathname !== nav.FRIEND && navigate(nav.FRIEND)}
          />
        </div>
        <div className="mb-9 space-y-3">
          <SidebarItem
            label="Notifications"
            isShowBar={false}
            children={<IoNotifications size={24} />}
          />
          <SidebarItem label="Settings" isShowBar={false} children={<IoMdSettings size={24} />} />
          <div className="flex justify-center py-5">
            <Divider className="w-9" />
          </div>
          <SidebarItem
            label="User 1"
            src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=1BwdynYvBPkQ7kNvgHiJbmH&_nc_oc=Adkxa3lzZg82gqe_Ys-zSAvakQdOL0BB87tTsMRNYmL862Oa9yF69Gjifd628UtJZ7n3UdV5XeAXRtyxR31hLDgm&_nc_zt=24&_nc_ht=scontent.fhan3-5.fna&oh=00_AYHCg4pRcEZlY_h4jkq7NXkk0xeTzAPQQ_h_b1MMRbhZ1w&oe=6814883A"
            isRadiusFull={true}
            isShowBar={false}
          />
        </div>
      </div>
    </div>
  )
}
