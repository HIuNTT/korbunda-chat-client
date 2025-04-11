import { InputOtp as HeroInputOtp, InputOtpProps as HeroInputOtpProps } from "@heroui/react"

export interface InputOtpProps extends HeroInputOtpProps {
  t: "input-otp"
}

export default function InputOtp({ t, ...props }: InputOtpProps) {
  if (t === "input-otp") {
    return (
      <HeroInputOtp
        color="primary"
        variant="bordered"
        {...props}
        classNames={{ segment: "border-small" }}
      />
    )
  }
  return null
}
