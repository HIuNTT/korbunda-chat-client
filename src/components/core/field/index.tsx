import { Controller, useFormContext } from "react-hook-form"

import Input, { InputProps } from "./Input"
import InputOtp, { InputOtpProps } from "./InputOtp"
import Radio, { RadioProps } from "./Radio"
import Select, { SelectProps } from "./Select"

type FieldProps = { name: string } & (InputProps | SelectProps | RadioProps | InputOtpProps)

export default function Field(props: FieldProps) {
  const { name, t } = props
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { invalid, error } }) => (
        <>
          {(t === "input" || t === "password") && (
            <Input {...field} {...props} errorMessage={error?.message} isInvalid={invalid} />
          )}
          {t === "input-otp" && (
            <InputOtp {...props} {...field} errorMessage={error?.message} isInvalid={invalid} />
          )}
          {t === "hide-input-error" && <Input {...field} {...props} />}
          {t === "select" && (
            <Select {...field} isInvalid={invalid} {...props} errorMessage={error?.message} />
          )}
          {t === "hide-select-error-message" && (
            <Select {...field} isInvalid={invalid} {...props} />
          )}
          {t === "radio" ||
            (t === "custom-radio" && (
              <Radio {...field} {...props} errorMessage={error?.message} isInvalid={invalid} />
            ))}
        </>
      )}
    />
  )
}
