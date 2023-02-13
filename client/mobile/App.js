import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Slides from './screens/Slides';

const App = () => {
  return (
    <NavigationContainer>
      <Slides />
    </NavigationContainer>
  );
};

export default App;
