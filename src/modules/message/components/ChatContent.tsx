import IncomingMessage from "./IncomingMessage"
import OutgoingMessage from "./OutgoingMessage"

export default function ChatContent() {
  return (
    <div className="flex flex-col">
      <IncomingMessage />
      <OutgoingMessage />
    </div>
  )
}
