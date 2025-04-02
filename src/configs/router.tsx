import { createBrowserRouter } from "react-router"

import { authRoute } from "modules/auth/route"
import { friendRoute } from "modules/friend/route"
import { messageRoute } from "modules/message/route"

export const router = createBrowserRouter([
  authRoute,
  messageRoute,
  friendRoute,
  {
    path: "*",
    element: <div>404</div>,
  },
])
