import { StyleSheet } from "react-native";
import { Themes } from "./assets/Themes";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";

const Stack = createStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={styles.Header}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: 'Song Details' }}/>
      <Stack.Screen name="PreviewScreen" component={PreviewScreen} options={{ title: 'Song Preview' }}/>
    </Stack.Navigator>
  </NavigationContainer>
};

const styles = StyleSheet.create({
  Header: {
    headerStyle: {
      backgroundColor: Themes.colors.background
    },
    headerTitleStyle: {
      color: "white"
    },
    headerBackTitle: 'back'
  }
});