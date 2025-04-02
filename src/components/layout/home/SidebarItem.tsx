import { cn } from "@heroui/react"

import { PropsWithChildren } from "react"

import Tooltip from "components/core/Tooltip"

interface SidebarItemProps {
  label: string
  src?: string
  isActive?: boolean
  isShowBar?: boolean
  isRadiusFull?: boolean
  handleClick?: () => void
}

export default function SidebarItem({
  label,
  src,
  isActive = false,
  isShowBar = true,
  isRadiusFull = false,
  handleClick,
  children,
}: PropsWithChildren<SidebarItemProps>) {
  return (
    <div className="relative flex justify-center">
      <Tooltip offset={14} radius="sm" content={label} placement="right" showArrow>
        <div
          onClick={handleClick}
          className={cn(
            "peer flex size-12 cursor-pointer items-center justify-center rounded-medium bg-background bg-cover bg-center transition-transform-colors hover:bg-primary hover:text-primary-foreground",
            { "bg-primary text-primary-foreground": isActive },
            { "rounded-full": isRadiusFull },
          )}
          style={{ backgroundImage: src && `url(${src})` }}
        >
          {children}
        </div>
      </Tooltip>
      {isShowBar && (
        <div
          className={cn(
            "absolute left-0 top-1/2 -ml-1 h-1/5 w-1 -translate-y-1/2 rounded-br-[4px] rounded-tr-[4px] bg-default-foreground duration-200 transition-size peer-hover:h-1/2 peer-hover:w-2",
            { "h-full w-2 peer-hover:h-full": isActive },
          )}
        ></div>
      )}
    </div>
  )
}
