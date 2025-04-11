import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Tokens, User } from "types/user"

interface UserState {
  tokens: Tokens
  user: User
  setToken: (tokens: Tokens) => void
  setUser: (user: Partial<User>) => void
  clear: () => void
}

const initialUserState: Pick<UserState, "tokens" | "user"> = {
  tokens: {
    accessToken: "",
    refreshToken: "",
  },
  user: {
    id: "",
    createdAt: "",
    updatedAt: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    birthday: "",
    avatarUrl: "",
    gender: "",
  },
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialUserState,
      setToken: (tokens) => set(() => ({ tokens })),
      setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
      clear: () => set(() => ({ ...initialUserState })),
    }),
    {
      name: "user",
      partialize: (state) => state.tokens,
    },
  ),
)
