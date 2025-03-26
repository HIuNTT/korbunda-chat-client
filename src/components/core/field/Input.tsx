import { Input as HeroInput, InputProps as HeroInputProps } from "@heroui/react"

import { useState } from "react"

import { IoIosEye, IoIosEyeOff } from "react-icons/io"

export interface InputProps extends HeroInputProps {
  t: "input" | "hide-input-error" | "password"
}

export default function Input({ t, ...props }: InputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  if (t === "input" || t === "hide-input-error") {
    return (
      <HeroInput
        color="primary"
        variant="bordered"
        radius="sm"
        classNames={{ label: "text-foreground", inputWrapper: "border-1" }}
        {...props}
      />
    )
  }

  if (t === "password") {
    return (
      <HeroInput
        color="primary"
        variant="bordered"
        radius="sm"
        type={isVisible ? "text" : "password"}
        endContent={
          <button
            className="pointer-events-none cursor-pointer select-none rounded-full p-[5px] opacity-0 transition-opacity duration-150 ease-out hover:bg-foreground-100 active:bg-foreground-200 peer-data-[filled=true]:pointer-events-auto peer-data-[filled=true]:block peer-data-[filled=true]:opacity-100"
            aria-label="toggle password visibility"
            tabIndex={-1}
            type="button"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <IoIosEye size={18} /> : <IoIosEyeOff size={18} />}
          </button>
        }
        classNames={{ label: "text-foreground", inputWrapper: "border-1", input: "peer" }}
        {...props}
      />
    )
  }

  return null
}
