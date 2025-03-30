import { Button, Card, CardBody, CardHeader, Divider, Link, cn } from "@heroui/react"

import { FormProvider, useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import dayjs from "dayjs"
import * as yup from "yup"

import { nav } from "constants/nav"

import Field from "components/core/field"

import BirthdaySelect from "../components/BirthdaySelect"

interface FormSignUp {
  firstName: string
  surName: string
  gender: string
  day: number
  month: number
  year: number
  username: string
  password: string
  confirmPassword: string
}

const signupSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  surName: yup.string().required("Surname is required"),
  gender: yup.string().required("Please choose a gender. You can change who can see this later."),
  day: yup.number().required(),
  month: yup.number().required(),
  year: yup.number().required(),
  username: yup
    .string()
    .required("You'll use this when you log in and if you ever need to reset your password")
    .test("is-email-or-phone", "Please enter a valid email address or phone number", (value) => {
      if (!value) return false
      const isEmail =
        // eslint-disable-next-line
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value,
        )
      const isPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(value)
      return isEmail || isPhone
    }),
  password: yup
    .string()
    .required(
      "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)",
    )
    .matches(
      // eslint-disable-next-line
      /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~|:;"'<>,./?])(?=.*[a-zA-Z])(?=(.*)).{6,}/,
      "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)",
    ),
  confirmPassword: yup
    .string()
    .required("Please re-enter your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
})

export default function SignUp() {
  const methods = useForm<FormSignUp>({
    defaultValues: {
      day: dayjs().date(),
      month: dayjs().month() + 1,
      year: dayjs().year(),
    },
    resolver: yupResolver(signupSchema),
    mode: "all",
  })

  return (
    <div className="py-10">
      <div className="text-center text-6xl font-bold text-primary">KorBunda</div>
      <Card radius="md" className="mx-auto mt-10 w-[432px] border-0">
        <CardHeader className="flex-col">
          <div className="text-2xl font-semibold">Create a new account</div>
          <div className="text-[15px] text-foreground-500">It's quick and easy</div>
        </CardHeader>
        <Divider />
        <CardBody className="p-4">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
              <div className="mb-4 grid grid-cols-2 gap-3">
                <Field t="input" name="firstName" placeholder="First name" />
                <Field t="input" name="surName" placeholder="Surname" />
              </div>
              <BirthdaySelect />
              <Field
                t="custom-radio"
                size="sm"
                name="gender"
                orientation="horizontal"
                label="Gender"
                itemStyle={{
                  base: cn(
                    "inline-flex m-0 items-center justify-between grow max-w-full",
                    "flex-row-reverse cursor-pointer rounded-[8px] gap-4 px-[10px] border-1 border-default-200",
                  ),
                  labelWrapper: "ml-0 [&>span]:text-[15px]",
                }}
                classNames={{ label: "text-[13px]" }}
                className="mb-4 gap-1"
                options={[
                  { label: "Female", value: "Female" },
                  { label: "Male", value: "Male" },
                  { label: "Other", value: "Other" },
                ]}
              />
              <Field
                className="mb-4"
                t="input"
                name="username"
                placeholder="Mobile number or email address"
              />
              <Field className="mb-4" t="password" name="password" placeholder="New password" />
              <Field
                className="mb-4"
                t="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
              <div className="text-center">
                <Button type="submit" className="my-3 min-w-[50%]" radius="sm" color="secondary">
                  Sign Up
                </Button>
              </div>
            </form>
          </FormProvider>
          <div className="py-3 text-center">
            <Link className="text-lg" href={nav.AUTH + nav.LOG_IN}>
              Already have an account?
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
