import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/FeedScreen';
import Search from '@/app/screens/SearchScreen';
import { Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import PostScreen from '../screens/PostScreen';
import TeachersListScreen from '../screens/TeachersListScreen';
import StudentsListScreen from '../screens/StudentsListScreen';
import FeedStack from '../screens/FeedStack';

type RootTabParamList = {
  Feed: undefined;
  Search: undefined;
  NewPost: undefined;
  TeachersList: undefined;
  StudentsList: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: RouteProp<RootTabParamList, keyof RootTabParamList> }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused
              ? require('../../assets/images/tab-menu-icons/feed-active.png')
              : require('../../assets/images/tab-menu-icons/feed.png');
          } else if (route.name === 'Search') {
            iconName = focused
              ? require('../../assets/images/tab-menu-icons/search-active.png')
              : require('../../assets/images/tab-menu-icons/search.png');
          } else if (route.name === 'NewPost') {
            iconName = require('../../assets/images/tab-menu-icons/new-post.png');
          } else if (route.name === 'TeachersList') {
            iconName = focused
              ? require('../../assets/images/tab-menu-icons/teachers-list-active.png')
              : require('../../assets/images/tab-menu-icons/teachers-list.png');
          } else if (route.name === 'StudentsList') {
            iconName = focused
              ? require('../../assets/images/tab-menu-icons/students-list-active.png')
              : require('../../assets/images/tab-menu-icons/students-list.png');
          }

          return <Image source={iconName} style={{ width: (route.name === 'NewPost' ? 45 : 35), height: (route.name === 'NewPost' ? 45 : 35) }} />;
        },
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingTop: 15,
          paddingLeft: 5,
          paddingRight: 5,
          height: 75,
        },
      })}
    >
      <Tab.Screen name="Feed" options={{headerShown: false}} component={FeedStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="NewPost" component={PostScreen} />
      <Tab.Screen name="TeachersList" component={TeachersListScreen} />
      <Tab.Screen name="StudentsList" component={StudentsListScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
