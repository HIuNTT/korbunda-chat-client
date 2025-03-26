import { Select as HeroSelect, SelectProps as HeroSelectProps, SelectItem } from "@heroui/react"

interface SelectOption {
  label: string
  value: string | number
}

export interface SelectProps extends HeroSelectProps {
  t: "select"
  options: SelectOption[]
}

export default function Select({ t, options, ...props }: SelectProps) {
  if (t !== "select") return null

  return (
    <HeroSelect {...props}>
      {options.map(({ label, value }) => (
        <SelectItem key={value}>{label}</SelectItem>
      ))}
    </HeroSelect>
  )
}
