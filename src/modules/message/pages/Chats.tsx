import { Avatar, Button } from "@heroui/react"

import { BsThreeDotsVertical } from "react-icons/bs"
import { BsFillSendFill } from "react-icons/bs"
import { FaSmile } from "react-icons/fa"
import { FaMicrophone, FaRegImage } from "react-icons/fa6"
import { ImPhone } from "react-icons/im"
import { IoVideocam } from "react-icons/io5"

import ChatContent from "../components/ChatContent"

export default function Chats() {
  return (
    <div className="flex h-full max-h-screen flex-col bg-default-100">
      <div className="relative bg-background">
        <div className="flex items-center justify-between gap-3 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=1BwdynYvBPkQ7kNvgHiJbmH&_nc_oc=Adkxa3lzZg82gqe_Ys-zSAvakQdOL0BB87tTsMRNYmL862Oa9yF69Gjifd628UtJZ7n3UdV5XeAXRtyxR31hLDgm&_nc_zt=24&_nc_ht=scontent.fhan3-5.fna&oh=00_AYHCg4pRcEZlY_h4jkq7NXkk0xeTzAPQQ_h_b1MMRbhZ1w&oe=6814883A" />
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-green-500"></span>
            </div>
            <div className="flex flex-col">
              <div className="max-w-full">
                <span className="block truncate break-all text-medium font-bold">Thành Trung</span>
              </div>
              <div>
                <span className="text-small text-foreground-500">Active now</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Button isIconOnly variant="light" color="primary" radius="full">
              <ImPhone size={22} />
            </Button>
            <Button isIconOnly variant="light" color="primary" radius="full">
              <IoVideocam size={22} />
            </Button>
            <Button isIconOnly variant="light" color="primary" radius="full">
              <BsThreeDotsVertical size={22} />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 shadow"></div>
      </div>
      <div className="grow overflow-y-auto">
        <div className="bg-default-100">
          <ChatContent />
        </div>
      </div>
      <div className="m-4 mt-0 flex items-center gap-2 rounded-medium bg-white px-2 py-3 drop-shadow-sm">
        <div className="flex items-center self-end [&>button>svg]:text-primary">
          <Button isIconOnly variant="light" radius="full">
            <FaMicrophone size={16} />
          </Button>
          <Button isIconOnly variant="light" radius="full">
            <FaRegImage size={16} />
          </Button>
        </div>
        <div className="grow">
          <div className="flex items-center rounded-[20px] bg-default-200/50 px-3 py-2">
            <div
              contentEditable
              className="mr-3 max-h-[124px] min-h-5 w-full min-w-0 overflow-y-auto whitespace-pre-wrap text-[15px] leading-5 caret-primary outline-none"
              style={{ wordBreak: "break-word" }}
            ></div>
            <Button
              color="default"
              isIconOnly
              variant="light"
              radius="full"
              className="-mx-3 -my-2 self-end [&>svg]:text-primary"
            >
              <FaSmile size={16} />
            </Button>
          </div>
        </div>
        <div className="self-end [&>button>svg]:text-primary">
          <Button isIconOnly variant="light" radius="full">
            <BsFillSendFill size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}
