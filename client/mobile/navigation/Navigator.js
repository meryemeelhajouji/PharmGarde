import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Map from '../screens/Map';
import Pharmacie from '../screens/Pharmacie';
import Favorie from '../screens/Favorie';
import { MaterialIcons, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="map"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="map-pin" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="pharmacie"
        component={Pharmacie}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="local-pharmacy" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="favorie"
        component={Favorie}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="favorite-outline" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
