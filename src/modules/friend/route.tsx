import { RouteObject } from "react-router"

import { nav } from "constants/nav"

import HomeLayout from "components/layout/home"

import Home from "./pages/Home"

export const friendRoute: RouteObject = {
  path: nav.FRIEND.slice(1),
  element: <HomeLayout />,
  children: [
    {
      path: "",
      Component: Home,
    },
  ],
}
