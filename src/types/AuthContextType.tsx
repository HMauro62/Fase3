import type { UserType } from './User';

export type AuthContextType = {
  user: UserType | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}