import FeedScreen from "@/app/screens/FeedScreen";
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name='Feed' component={FeedScreen} />
  </AppStack.Navigator>
)

export default AppRoutes;