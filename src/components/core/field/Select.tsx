import { Select as HeroSelect, SelectProps as HeroSelectProps, SelectItem } from "@heroui/react"

export interface SelectOption {
  label: string
  value: string | number
}

export interface SelectProps extends Omit<HeroSelectProps, "children"> {
  t: "select" | "hide-select-error-message"
  options: SelectOption[]
}

export default function Select({ t, options, ...props }: SelectProps) {
  if (t !== "select" && t !== "hide-select-error-message") return null

  return (
    <HeroSelect {...props} variant="bordered" radius="sm" classNames={{ trigger: "border-1" }}>
      {options.map(({ label, value }) => (
        <SelectItem key={value}>{label}</SelectItem>
      ))}
    </HeroSelect>
  )
}
