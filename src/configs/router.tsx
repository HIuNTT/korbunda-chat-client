import { createBrowserRouter } from 'react-router'

import { authRoute } from 'modules/auth/route'

export const router = createBrowserRouter([
  authRoute,
  {
    path: '*',
    element: <div>404</div>,
  },
])
