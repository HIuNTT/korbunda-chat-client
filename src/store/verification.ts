import { create } from "zustand"

interface VerificationState {
  value: string
  set: (value: string) => void
  clear: () => void
}

export const useVerification = create<VerificationState>()((set) => ({
  value: "",
  set: (value) => set({ value }),
  clear: () => set({ value: "" }),
}))
