import { StackNavigationProp } from "@react-navigation/stack";

export interface PostProps {
  title?: string;
  description?: string;
  userName?: string;
  id: string
  navigation?: StackNavigationProp<any>
}