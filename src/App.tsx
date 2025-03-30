import { HeroUIProvider, ToastProvider } from "@heroui/react"

import { Suspense } from "react"

import { RouterProvider } from "react-router"

import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "configs/queryClient"
import { router } from "configs/router"

import LoadingPage from "components/common/LoadingPage"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider navigate={router.navigate}>
        <Suspense fallback={<LoadingPage />}>
          <ToastProvider
            toastProps={{
              radius: "sm",
              timeout: 3000,
            }}
            placement="bottom-left"
            toastOffset={10}
          />
          <RouterProvider router={router} />
        </Suspense>
      </HeroUIProvider>
    </QueryClientProvider>
  )
}

export default App
