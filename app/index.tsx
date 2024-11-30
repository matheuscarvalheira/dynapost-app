import { AuthProvider } from "@/contexts/auth-context";
import MainStack from "./navigation/MainStack";

export default function Index() {
  return (
    <AuthProvider>
      <MainStack />
    </AuthProvider>
  );
}
