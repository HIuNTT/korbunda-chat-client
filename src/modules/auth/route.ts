import { lazy } from "react"

import { RouteObject } from "react-router"

import { nav } from "constants/nav"

const LogIn = lazy(() => import("./pages/LogIn"))

export const authRoute: RouteObject = {
  path: nav.AUTH.slice(1),
  children: [
    {
      path: nav.LOG_IN.slice(1),
      Component: LogIn,
    },
  ],
}
