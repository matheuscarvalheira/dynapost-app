import { ParamListBase, RouteProp } from "@react-navigation/native";

export interface AuthContextProps {
  register: ({
    name,
    email,
    password,
    classrooms,
    userType,
  }: RegisterProps) => Promise<RegisteResult>;
  signIn: ({ email, password }: SignInProps) => void;
  logOut: () => void;
  isLoggedIn: boolean;
  userId: string;
  userType: string;
}

export interface AuthProviderProps {
  // route: RouteProp<ParamListBase>
  children: React.ReactNode;
}

export interface RegisterProps {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  classrooms: string[] | undefined;
  userType: string | undefined;
}

export interface RegisteResult {
  registerOk: boolean;
  message: string | undefined | unknown;
}

export interface SignInProps {
  email: string | undefined;
  password: string | undefined;
}

export interface SignResult {
  signInOk: boolean;
  message: string | undefined | unknown;
}

export interface Classroom {
  id: string;
  name: string;
  createdAt: string;
  modifiedAt: string;
}
