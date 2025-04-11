import { useMutation } from "@tanstack/react-query"

import { ApiResponse } from "types/api"
import { Tokens } from "types/user"

import { api } from "configs/api"

export interface GoogleLoginParams {
  code: string
}

export interface GoogleLoginResponse {
  accessToken: string
  refreshToken: string
}

export interface LoginDto {
  identifier: string
  password: string
}

export async function googleLogin(params: GoogleLoginParams) {
  return (
    await api.post<ApiResponse<GoogleLoginResponse>>(
      "/identity/auth/outbound/authentication",
      undefined,
      {
        params,
      },
    )
  ).data.result
}

export function useGoogleLogin() {
  return useMutation({
    mutationFn: googleLogin,
  })
}

async function login(data: LoginDto) {
  return (await api.post<ApiResponse<Tokens>>("/identity/auth/login", data)).data.result
}

export function useLogin() {
  return useMutation({
    mutationFn: login,
  })
}
