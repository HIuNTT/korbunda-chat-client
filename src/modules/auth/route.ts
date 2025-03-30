import { lazy } from "react"

import { RouteObject } from "react-router"

import { nav } from "constants/nav"

const LogIn = lazy(() => import("./pages/LogIn"))
const SignUp = lazy(() => import("./pages/SignUp"))

export const authRoute: RouteObject = {
  path: nav.AUTH.slice(1),
  children: [
    {
      path: nav.LOG_IN.slice(1),
      Component: LogIn,
    },
    {
      path: nav.SIGN_UP.slice(1),
      Component: SignUp,
    },
  ],
}
