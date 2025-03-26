import { Spinner } from "@heroui/react"

export default function LoadingPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spinner size="lg" classNames={{ circle1: "border-4", circle2: "border-4" }} />
    </div>
  )
}
