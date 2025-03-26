import { Button, Card, CardBody, Divider, Link } from "@heroui/react"

import { FormProvider, useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Field from "components/core/field"

const formSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
})

export default function LogIn() {
  const methods = useForm({ resolver: yupResolver(formSchema) })

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
            <form>
              <div className="[&>div+div]:pt-3">
                <Field
                  name="username"
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
              <Button isIconOnly aria-label="Google" size="md" variant="light" className="ml-1">
                <FcGoogle size={24} />
              </Button>
            </div>
          </div>
          <Divider className="my-5" />
          <div className="text-center">
            <Button className="mb-2 mt-1" size="lg" radius="sm" color="secondary">
              Create new account
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
