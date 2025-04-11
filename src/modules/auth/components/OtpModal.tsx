import { Button, ModalBody, ModalFooter, ModalHeader, Spinner, addToast } from "@heroui/react"

import { useMemo } from "react"

import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { nav } from "constants/nav"

import useTimer from "hooks/useTimer"

import { useUserStore } from "store/user"

import Field from "components/core/field"

import { VerifyOtpDto, useResendOtp, useVerifyOtp } from "../services/signUp"

interface OtpModalProps {
  onClose: () => void
  value?: string
}

const schema = yup.object({
  otp: yup.string().required("Please enter the code"),
})

export default function OtpModal({ onClose, value }: OtpModalProps) {
  const methods = useForm<Pick<VerifyOtpDto, "otp">>({
    resolver: yupResolver(schema),
    defaultValues: {
      otp: "",
    },
  })

  const navigate = useNavigate()
  const user = useUserStore()
  const verifyOtp = useVerifyOtp()
  const resendOtp = useResendOtp()

  const isEmail = useMemo(() => value?.includes("@"), [value])

  const { seconds, onRestart, isRunning } = useTimer({
    initialTime: Date.now() + 30 * 1000,
  })

  const onSubmit: SubmitHandler<Pick<VerifyOtpDto, "otp">> = ({ otp }) => {
    verifyOtp.mutate(
      { identifier: value!, otp },
      {
        onSuccess: ({ accessToken, refreshToken }) => {
          user.setToken({ accessToken, refreshToken })
          addToast({
            title: "Sign up successfully",
            color: "success",
          })
          onClose()
          navigate(nav.MESSAGE)
        },
      },
    )
  }

  const handleResendCode = () => {
    resendOtp.mutate(value!, {
      onSuccess: () => {
        onRestart(Date.now() + 30 * 1000)
      },
    })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ModalHeader>
          {isEmail
            ? "Enter the code from your email"
            : "Enter the confirmation code from the text message"}
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-3">
            {isEmail ? (
              <div>
                Let us know that this email address belongs to you. Enter the code from the email
                sent to <span className="font-bold">{value}</span>.
              </div>
            ) : (
              <div>
                Let us know if this mobile number belongs to you. Enter the code in the SMS sent to{" "}
                <span className="font-bold">{value}</span>.
              </div>
            )}
            <div>
              <Field t="input-otp" autoFocus name="otp" size="lg" length={6} minLength={0} />
            </div>
            <div className="text-[15px] text-default-500">
              {isRunning ? (
                <span>
                  Resend code in <span className="text-primary">{seconds + "s"}</span>
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  Not received?
                  <span
                    className="flex cursor-pointer items-center text-primary underline-offset-4 hover:underline hover:opacity-80 active:opacity-disabled"
                    onClick={handleResendCode}
                  >
                    {resendOtp.isPending ? (
                      <Spinner classNames={{ wrapper: "w-5 h-5" }} size="sm" />
                    ) : (
                      "Resend code"
                    )}
                  </span>
                </span>
              )}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            type="submit"
            isLoading={verifyOtp.isPending}
            isDisabled={!methods.formState.isValid}
          >
            Confirm
          </Button>
        </ModalFooter>
      </form>
    </FormProvider>
  )
}
