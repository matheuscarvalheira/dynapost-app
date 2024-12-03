import { AuthProvider } from "@/contexts/auth-context";
import MainStack from "./navigation/MainStack";
import { BackendProvider } from "@/contexts/backend-context";
import { TeacherProvider } from "@/contexts/teacher-context";
import { StudentProvider } from "@/contexts/student-context";

export default function Index() {
  return (
    <AuthProvider>
      <BackendProvider>
        <TeacherProvider>
          <StudentProvider>
            <MainStack />
          </StudentProvider>
        </TeacherProvider>
      </BackendProvider>
    </AuthProvider>
  );
}
