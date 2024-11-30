import { AuthProvider } from "@/contexts/auth-context";
import MainStack from "./navigation/MainStack";
import { BackendProvider } from "@/contexts/backend-context";

export default function Index() {
  return (
    <AuthProvider>
      <BackendProvider>
        <MainStack />
      </BackendProvider>
    </AuthProvider>
  );
}
