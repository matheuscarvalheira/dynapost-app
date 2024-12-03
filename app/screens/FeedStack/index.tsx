import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from '../FeedScreen';
import PostDetails from '../PostDetails';
import PostScreen from '../PostScreen';

const Stack = createStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen
        name="PostDetails"
        options={{ headerTitle: "Post Details" }}
        // @ts-ignore
        component={PostDetails}
      />
      <Stack.Screen
        name="EditScreen"
        options={{ headerShown: true }}
        component={PostScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;
