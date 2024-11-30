import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  ClassroomList: undefined;
  MainTabs: undefined;
};

type ClassroomListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ClassroomList'
>;

export type ClassroomListProps = {
  navigation: ClassroomListNavigationProp;
};
