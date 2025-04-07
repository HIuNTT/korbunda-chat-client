import { Avatar, Button, cn } from "@heroui/react"

import { FaBellSlash } from "react-icons/fa6"
import { ImSearch } from "react-icons/im"
import { LuCheckCheck } from "react-icons/lu"
import { useNavigate, useParams } from "react-router"

import ComposeIcon from "components/common/ComposeIcon"

export default function MessengerCard() {
  const navigate = useNavigate()

  const { id } = useParams()

  return (
    <div className="flex max-h-screen min-w-[300px] max-w-[480px] grow flex-col">
      <div className="mt-2 flex items-end justify-between p-3">
        <h1 className="pl-1 text-2xl font-bold">Messages</h1>
        <Button isIconOnly radius="full" variant="light" className="bg-default/20">
          <ComposeIcon />
        </Button>
      </div>
      <div className="px-4 pb-3">
        <Button
          fullWidth
          variant="flat"
          radius="full"
          className="justify-start bg-default/30 text-[15px] text-default-500"
          disableAnimation
          startContent={<ImSearch size={20} />}
        >
          Search messenger...
        </Button>
      </div>
      <div className="overflow-y-auto last:pb-3">
        {Array.from({ length: 30 }).map((_, index) => (
          <div className="px-[6px]">
            <div
              onClick={() => navigate(`${index}`)}
              className={cn(
                "group relative cursor-pointer select-none rounded-medium p-[10px] transition-all duration-200 ease-in-out",
                { "bg-default/35": id === `${index}` },
                { "hover:bg-default/20 active:bg-default/50": id !== `${index}` },
              )}
            >
              <div className="flex items-center">
                <div className="relative mr-3">
                  <Avatar
                    name={`User ${index}`}
                    src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=1BwdynYvBPkQ7kNvgHiJbmH&_nc_oc=Adkxa3lzZg82gqe_Ys-zSAvakQdOL0BB87tTsMRNYmL862Oa9yF69Gjifd628UtJZ7n3UdV5XeAXRtyxR31hLDgm&_nc_zt=24&_nc_ht=scontent.fhan3-5.fna&oh=00_AYHCg4pRcEZlY_h4jkq7NXkk0xeTzAPQQ_h_b1MMRbhZ1w&oe=6814883A"
                    classNames={{ base: "size-12" }}
                  />
                  <div className="absolute bottom-0 right-0 z-10 size-3 rounded-full border-2 border-background bg-green-500"></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="line-clamp-1 text-[15px] font-bold">
                      User user user user user nam nam nam nam {index}
                    </span>
                    <div className="flex items-center gap-1 text-foreground-400">
                      <FaBellSlash size={16} />
                      <span className="text-[13px]">12:50</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="line-clamp-1 text-[13px] text-foreground-500">
                      You: Message Message Message Message Message Message Message Message {index}
                    </span>
                    <div>
                      <LuCheckCheck size={14} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
