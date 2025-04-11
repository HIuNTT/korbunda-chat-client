export interface User {
  id: string
  createdAt: string
  updatedAt: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  username: string
  birthday: string
  gender: string
  avatarUrl: string
}

export interface Tokens {
  accessToken: string
  refreshToken: string
}
