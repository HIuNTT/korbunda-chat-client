import { Button, Card, CardBody, Divider, Link, addToast } from "@heroui/react"

import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router"

import { yupResolver } from "@hookform/resolvers/yup"
import { useGoogleLogin } from "@react-oauth/google"
import * as yup from "yup"

import { nav } from "constants/nav"

import { useUserStore } from "store/user"

import Field from "components/core/field"

import { useLogin, useGoogleLogin as useMyGoogleLogin } from "../services/logIn"

const formSchema = yup.object({
  identifier: yup
    .string()
    .required("The email address or mobile number you entered isn't connected to an account."),
  password: yup.string().when("identifier", {
    is: (val: string) => !!val,
    then: (schema) => schema.required("Please enter your password."),
    otherwise: (schema) => schema.optional(),
  }),
})

interface FormValues {
  identifier: string
  password?: string
}

export default function LogIn() {
  const methods = useForm<FormValues>({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(formSchema),
  })

  const navigate = useNavigate()

  const { setToken } = useUserStore()
  const googleLogin = useMyGoogleLogin()
  const login = useLogin()

  const handleGoogleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async ({ code }) => {
      const { accessToken, refreshToken } = await googleLogin.mutateAsync({ code })
      setToken({ accessToken, refreshToken })
      navigate(nav.MESSAGE)
    },
    onError() {
      addToast({
        title: "Google login failed",
        color: "danger",
      })
    },
  })

  const onSubmit: SubmitHandler<FormValues> = ({ identifier, password }) => {
    login.mutate(
      { identifier, password: password! },
      {
        onSuccess: ({ accessToken, refreshToken }) => {
          setToken({ accessToken, refreshToken })
          addToast({
            title: "Login successfully",
            color: "success",
          })
          navigate(nav.MESSAGE)
        },
      },
    )
  }

  return (
    <div className="m-auto min-h-screen max-w-[1000px] py-10 max-lg:px-10 md:grid md:grid-cols-12 md:place-items-center">
      <div className="m-auto max-md:w-[400px] max-md:text-center md:col-span-6 md:pr-10 lg:pr-0">
        <div className="text-6xl font-bold text-primary">KorBunda</div>
        <div className="mt-5 text-[24px] lg:text-[28px] lg:leading-10">
          Korbunda helps you connect with the people via calls, chats, and more.
        </div>
      </div>
      <Card
        radius="md"
        className="mt-10 w-[396px] border-0 max-md:mx-auto md:col-span-6 md:justify-self-end"
      >
        <CardBody className="p-4">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="[&>div+div]:pt-3">
                <Field
                  name="identifier"
                  t="input"
                  size="lg"
                  color="primary"
                  placeholder="Email address or phone number"
                />
                <Field size="lg" t="password" name="password" placeholder="Password" />
              </div>
              <Button
                type="submit"
                color="primary"
                fullWidth
                size="lg"
                radius="sm"
                className="mt-5"
                isLoading={login.isPending}
              >
                Log in
              </Button>
            </form>
          </FormProvider>
          <div className="mt-4 flex items-center justify-between">
            <Link size="sm" href="#" underline="hover">
              Forgotten password?
            </Link>
            <div className="flex items-center">
              <p className="text-sm text-foreground-600">Or log in with</p>
              <Button
                isIconOnly
                aria-label="Google"
                size="md"
                variant="light"
                className="ml-1"
                isLoading={googleLogin.isPending}
                onPress={handleGoogleLogin}
              >
                <FcGoogle size={24} />
              </Button>
            </div>
          </div>
          <Divider className="my-5" />
          <div className="text-center">
            <Button
              as={Link}
              href={nav.AUTH + nav.SIGN_UP}
              className="mb-2 mt-1"
              size="lg"
              radius="sm"
              color="secondary"
            >
              Create new account
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
