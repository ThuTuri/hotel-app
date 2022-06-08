import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { Colors } from './src/constants/styles';
import ShowRoomScreen from './src/screens/all-top-hotel/ShowRoomScreen';
import DetailsScreen from './src/screens/details/DetailsScreen';
import MapViewScreen from './src/screens/details/map/MapView';
import LoginScreen from './src/screens/login/LoginScreen';
import SignupScreen from './src/screens/signup/SignupScreen';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
import BottomTab from './src/shared/bottom-tabs/BottomTab';
import AuthContextProvider, { AuthContext } from './src/store/auth-context';


const Stack = createNativeStackNavigator();
const StackLoggedIn = createNativeStackNavigator();
const StackNotLoggedIn = createNativeStackNavigator();

function AuthStack() {
  return (
    <StackNotLoggedIn.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <StackNotLoggedIn.Screen options={{ headerShown: false }} name='Welcome' component={WelcomeScreen} />
      <StackNotLoggedIn.Screen options={{ headerShown: false }} name='Home' component={BottomTab} />
      <StackNotLoggedIn.Screen options={{ headerShown: false }} name='DetailsScreen' component={DetailsScreen} />
      <StackNotLoggedIn.Screen name='Top Hotels' component={ShowRoomScreen} />
      <StackNotLoggedIn.Screen  name='Map' component={MapViewScreen} />
      <StackNotLoggedIn.Screen name="Login" component={LoginScreen} />
      <StackNotLoggedIn.Screen name="Signup" component={SignupScreen} />

    </StackNotLoggedIn.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <StackLoggedIn.Navigator screenOptions={{ headerShown: true }}>
      <StackLoggedIn.Screen options={{ headerShown: false }} name='Home' component={BottomTab} />
      <StackLoggedIn.Screen name='Top Hotels' component={ShowRoomScreen} />
      <StackLoggedIn.Screen options={{ headerShown: false }} name='DetailsScreen' component={DetailsScreen} />
    </StackLoggedIn.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext)
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: false }} initialRouteName={authCtx.isAuthenticated ? "LoggedIn" : "NotLoggedIn"}>
        <Stack.Screen options={{ headerShown: false }} name='LoggedIn' component={AuthenticatedStack} />
        <Stack.Screen options={{ headerShown: false }} name='NotLoggedIn' component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>

    </>
  );
}
