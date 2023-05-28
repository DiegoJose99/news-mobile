import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from 'react';

import Home from '../screens/Home';
import Detalle from '../screens/Detalle';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalle" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation