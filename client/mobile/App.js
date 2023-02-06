import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Pharmacie from './screens/Pharmacie';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome to Home' }} />
        
        <Stack.Screen name="Pharmacie" component={Pharmacie} options={{ title: 'Welcome to Pharmacie' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
