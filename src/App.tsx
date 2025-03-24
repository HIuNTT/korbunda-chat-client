import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen flex-col place-items-center justify-center text-center">
      <h1 className="text-[3.2em]">Korbunda</h1>
      <div className="p-8">
        <button
          className="cursor-pointer rounded-[8px] border-1 border-solid border-transparent bg-[#f9f9f9] px-[1.2em] py-[0.6em] text-[1em] font-medium transition-[border-color] duration-250 hover:border-[#646cff] focus-visible:border-4"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
