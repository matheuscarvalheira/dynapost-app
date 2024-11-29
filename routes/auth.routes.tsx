import LoginScreen from "@/app/screens/LoginScreen";
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name='Login' component={LoginScreen} />
  </AuthStack.Navigator>
)

export default AuthRoutes;