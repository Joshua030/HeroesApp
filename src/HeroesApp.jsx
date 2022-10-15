import { AuthProvider } from "./auth/context"
import { AppRouter } from "./routers/AppRouter"

export const HeroesApp = () => {
  return (
    <AuthProvider>
   <AppRouter />
    </AuthProvider>
  )
}
