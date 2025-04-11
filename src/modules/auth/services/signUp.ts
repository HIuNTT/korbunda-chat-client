import { useMutation } from "@tanstack/react-query"

import { ApiResponse } from "types/api"
import { Tokens, User } from "types/user"

import { api } from "configs/api"

export interface SignUpAccountDto {
  firstName: string
  lastName: string
  dob: string
  gender: string
  identifier: string
  password: string
  rePassword: string
}

export interface SignUpAccountResponse extends Partial<Pick<User, "email" | "phoneNumber">> {
  id: string
  username: string
}
export interface VerifyOtpDto {
  identifier: string
  otp: string
}

async function signUpAccount(data: SignUpAccountDto) {
  return (await api.post<ApiResponse<SignUpAccountResponse>>("/identity/users/register", data)).data
    .result
}

export function useSignUpAccount() {
  return useMutation({
    mutationFn: signUpAccount,
  })
}

async function verifyOtp(data: VerifyOtpDto) {
  return (await api.post<ApiResponse<Tokens>>("/identity/auth/activate-account", data)).data.result
}

export function useVerifyOtp() {
  return useMutation({
    mutationFn: verifyOtp,
  })
}

async function resendOtp(identifier: string) {
  return await api.post("/identity/auth/resend-otp", { identifier })
}

export function useResendOtp() {
  return useMutation({
    mutationFn: resendOtp,
  })
}
