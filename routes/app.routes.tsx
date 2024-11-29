import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from "@/app/navigation/TabNavigator";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <TabNavigator/>
)

export default AppRoutes;