import { AuthProvider } from "@/contexts/auth-context";
import MainStack from "./navigation/MainStack";
import { BackendProvider } from "@/contexts/backend-context";
import { TeacherProvider } from "@/contexts/teacher-context";

export default function Index() {
  return (
    <AuthProvider>
      <BackendProvider>
        <TeacherProvider>
          <MainStack />
        </TeacherProvider>
      </BackendProvider>
    </AuthProvider>
  );
}
