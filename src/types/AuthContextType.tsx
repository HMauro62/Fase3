import type { UserType } from './User';

export type AuthContextType = {
  user: UserType | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}