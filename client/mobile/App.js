import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigator';
import Home from './screens/Home';
import Pharmacie from './screens/Pharmacie';


const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
