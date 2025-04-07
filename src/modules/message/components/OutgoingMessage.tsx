export default function OutgoingMessage() {
  return (
    <div className="flex flex-row-reverse">
      <div className="w-4"></div>
      <div className="break-words rounded-3xl bg-primary px-3 py-2 text-primary-foreground">
        message lâu năm
      </div>
      <div className="w-[84px]"></div>
      <div className="grow basis-0"></div>
    </div>
  )
}
