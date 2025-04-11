import { HeroUIProvider, ToastProvider } from "@heroui/react"

import { Suspense } from "react"

import { RouterProvider } from "react-router"

import { GoogleOAuthProvider } from "@react-oauth/google"
import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "configs/queryClient"
import { router } from "configs/router"

import LoadingPage from "components/common/LoadingPage"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider navigate={router.navigate}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <Suspense fallback={<LoadingPage />}>
            <ToastProvider
              toastProps={{
                radius: "sm",
              }}
              placement="bottom-left"
              toastOffset={10}
            />
            <RouterProvider router={router} />
          </Suspense>
        </GoogleOAuthProvider>
      </HeroUIProvider>
    </QueryClientProvider>
  )
}

export default App
