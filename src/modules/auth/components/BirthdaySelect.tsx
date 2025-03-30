import { useFormContext, useFormState, useWatch } from "react-hook-form"

import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"

import { months } from "constants/date"

import Field from "components/core/field"

dayjs.extend(customParseFormat)

export default function BirthdaySelect() {
  const { control } = useFormContext()
  const { isSubmitted, dirtyFields } = useFormState({
    control,
    name: ["day", "month", "year"],
  })

  const day = useWatch({ control, name: "day" })
  const month = useWatch({ control, name: "month" })
  const year = useWatch({ control, name: "year" })

  const date = dayjs(`${year}-${month}-${day}`, "YYYY-M-D", true)
  const isInvalid = !date.isValid() || dayjs().diff(date, "year") < 5

  const isShowError = !!dirtyFields.day || !!dirtyFields.month || !!dirtyFields.year || isSubmitted

  return (
    <div className="mb-4 flex flex-col gap-1">
      <span className="text-[13px] text-foreground-500">Date of birth</span>
      <div className="grid grid-cols-3 gap-3">
        <Field
          t="hide-select-error-message"
          name="day"
          aria-label="Day"
          defaultSelectedKeys={[dayjs().date().toString()]}
          options={Array.from({ length: 31 }, (_, i) => i + 1).map((value) => ({
            label: value.toString(),
            value,
          }))}
          maxListboxHeight={320}
          isInvalid={isShowError && isInvalid}
        />
        <Field
          t="hide-select-error-message"
          name="month"
          aria-label="Month"
          defaultSelectedKeys={[(dayjs().month() + 1).toString()]}
          options={months.map((value, idx) => ({
            label: value,
            value: idx + 1,
          }))}
          maxListboxHeight={320}
          isInvalid={isShowError && isInvalid}
        />
        <Field
          key={123}
          t="hide-select-error-message"
          name="year"
          aria-label="Year"
          defaultSelectedKeys={[dayjs().year().toString()]}
          options={Array.from({ length: 121 }, (_, i) => new Date().getFullYear() - i).map(
            (value) => ({ label: value.toString(), value }),
          )}
          maxListboxHeight={320}
          isInvalid={isShowError && isInvalid}
        />
      </div>

      {isShowError && isInvalid && (
        <div className="text-tiny text-danger">
          It looks like you've entered the wrong info. Please make sure that you use your real date
          of birth.
        </div>
      )}
    </div>
  )
}
