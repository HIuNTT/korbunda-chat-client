import { RouteObject } from "react-router"

import { nav } from "constants/nav"

import HomeLayout from "components/layout/home"

import Chats from "./pages/Chats"
import Home from "./pages/Home"
import Messages from "./pages/Messages"

export const messageRoute: RouteObject = {
  path: nav.MESSAGE.slice(1),
  element: <HomeLayout />,
  children: [
    {
      path: "",
      Component: Messages,
      children: [
        {
          path: "",
          Component: Home,
        },
        {
          path: ":id",
          Component: Chats,
        },
      ],
    },
  ],
}
