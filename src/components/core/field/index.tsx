import { Controller, useFormContext } from "react-hook-form"

import Input, { InputProps } from "./Input"
import Select, { SelectProps } from "./Select"

type FieldProps = { name: string } & (InputProps | SelectProps)

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
          {t === "hide-input-error" && <Input {...field} {...props} />}
          {t === "select" && (
            <Select {...field} {...props} isInvalid={invalid} errorMessage={error?.message} />
          )}
        </>
      )}
    />
  )
}
