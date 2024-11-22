import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

export interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}