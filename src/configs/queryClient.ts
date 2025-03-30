import { addToast } from '@heroui/react'
import { QueryClient, keepPreviousData } from '@tanstack/react-query'
import { AxiosError } from 'axios'

// Define a custom error handling function
function handleError(err: unknown) {
  let message = ''

  if (err instanceof AxiosError) {
    message = err.response?.data?.message || err.message
  } else if (err instanceof Error) {
    message = `Execution error: ${err.message}`
  }

  addToast({
    title: message,
    color: 'danger',
  })
}

// Create a new instance of QueryClient
// with default options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      placeholderData: keepPreviousData,
    },
    mutations: {
      retry: 0,
      onError: handleError,
    },
  },
})
