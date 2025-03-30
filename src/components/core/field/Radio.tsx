import {
  RadioGroup as HeroRadioGroup,
  RadioGroupProps as HeroRadioGroupProps,
  Radio as RadioItem,
  RadioSlots,
  SlotsToClasses,
  cn,
} from "@heroui/react"

interface RadioOption {
  label: string
  value: string
}

export interface RadioProps extends HeroRadioGroupProps {
  t: "radio" | "custom-radio"
  itemStyle: SlotsToClasses<RadioSlots>
  options: RadioOption[]
}
export default function Radio({ t, options, itemStyle, isInvalid, ...props }: RadioProps) {
  if (t === "radio") {
    return (
      <HeroRadioGroup {...props}>
        {options.map(({ label, value }) => (
          <RadioItem value={value} key={value}>
            {label}
          </RadioItem>
        ))}
      </HeroRadioGroup>
    )
  }

  if (t === "custom-radio") {
    return (
      <HeroRadioGroup {...props} isInvalid={isInvalid}>
        {options.map(({ label, value }) => (
          <RadioItem
            value={value}
            key={value}
            classNames={{
              ...itemStyle,
              base: cn(itemStyle.base, { "border-danger": isInvalid }),
              labelWrapper: cn(itemStyle.labelWrapper, { "[&>span]:text-foreground": isInvalid }),
              wrapper: cn(itemStyle.wrapper, {
                "border-default group-data-[hover-unselected=true]:bg-default-100": isInvalid,
              }),
            }}
          >
            {label}
          </RadioItem>
        ))}
      </HeroRadioGroup>
    )
  }
}
