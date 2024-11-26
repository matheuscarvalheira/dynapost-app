import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from '../FeedScreen';
import PostDetails from '../PostDetails';

const Stack = createStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      {/* @ts-ignore */}
      <Stack.Screen name="PostDetails" options={{headerTitle: "Post Details"}} component={PostDetails} />
    </Stack.Navigator>
  );
};

export default FeedStack;
