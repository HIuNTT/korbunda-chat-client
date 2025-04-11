import { useEffect, useRef, useState } from "react"

interface UseTimerProps {
  initialTime: number
  onExpire?: () => void
  interval?: number
  autoStart?: boolean
}

function getLeftMilliseconds(value: number) {
  return Math.max(new Date(value).getTime() - Date.now(), 0)
}

export default function useTimer({
  initialTime,
  onExpire,
  interval = 1000,
  autoStart = true,
}: UseTimerProps) {
  const [expiryTime, setExpiryTime] = useState<number>(initialTime)
  const [milliseconds, setMilliseconds] = useState<number>(getLeftMilliseconds(expiryTime))
  const [isRunning, setIsRunning] = useState<boolean>(autoStart)

  const countdown = useRef<ReturnType<typeof setInterval> | null>(null)

  const restartTimer = (newInitialTime: number) => {
    setExpiryTime(newInitialTime)
    setMilliseconds(getLeftMilliseconds(newInitialTime))
    setIsRunning(true)
    if (countdown.current) {
      clearInterval(countdown.current)
      countdown.current = null
    }
  }

  const stopTimer = () => {
    onExpire?.()
    setIsRunning(false)
    if (countdown.current) {
      clearInterval(countdown.current)
      countdown.current = null
    }
  }

  const syncTimer = () => {
    const timestamp = new Date(expiryTime).getTime()
    if (timestamp >= Date.now()) {
      countdown.current = setInterval(() => {
        setMilliseconds(getLeftMilliseconds(timestamp))
        if (timestamp < Date.now()) {
          stopTimer()
        }
      }, interval)
    }
  }

  useEffect(() => {
    syncTimer()
    return () => {
      if (countdown.current) {
        clearInterval(countdown.current)
        countdown.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expiryTime])

  return { seconds: Math.ceil(milliseconds / 1000), isRunning, onRestart: restartTimer }
}
