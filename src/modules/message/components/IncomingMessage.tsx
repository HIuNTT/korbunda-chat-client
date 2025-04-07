import { Avatar } from "@heroui/react"

export default function IncomingMessage() {
  return (
    <div className="flex">
      <div className="flex items-end">
        <div className="pl-4 pr-2">
          <div className="w-7">
            <Avatar
              classNames={{ base: "size-7" }}
              src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=1BwdynYvBPkQ7kNvgHiJbmH&_nc_oc=Adkxa3lzZg82gqe_Ys-zSAvakQdOL0BB87tTsMRNYmL862Oa9yF69Gjifd628UtJZ7n3UdV5XeAXRtyxR31hLDgm&_nc_zt=24&_nc_ht=scontent.fhan3-5.fna&oh=00_AYHCg4pRcEZlY_h4jkq7NXkk0xeTzAPQQ_h_b1MMRbhZ1w&oe=6814883A"
            />
          </div>
        </div>
      </div>
      <div className="break-words rounded-3xl bg-white px-3 py-2">
        Message cav cav ca vai vai vai vai vai vaiv vaiv viai iiii iii iiiii iiiii iii
      </div>
      <div className="w-[84px]"></div>
      <div className="grow basis-0"></div>
    </div>
  )
}
