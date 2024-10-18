import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Screens/HomeScreen";
import ListJobsScreen from "./Screens/ListJobsScreen";
import AddJobScreen from "./Screens/AddJobScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListJobs" component={ListJobsScreen} />
        <Stack.Screen name="AddJob" component={AddJobScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
