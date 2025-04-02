import { Tooltip as HeroTooltip, TooltipProps } from "@heroui/react"

export default function Tooltip(props: TooltipProps) {
  return (
    <HeroTooltip closeDelay={0} classNames={{ content: "font-semibold py-2 px-3" }} {...props} />
  )
}
