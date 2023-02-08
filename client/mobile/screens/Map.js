import { View, StyleSheet, Pressable, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const Map = () => {
  const [myRegion, setMyRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [error, setError] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return setError('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMyRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={myRegion} provider="google">
        <Marker coordinate={myRegion} title="My Location" description="This is my location" />
      </MapView>

      <Pressable
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 50,
        }}
        onPress={getLocation}
      >
        <MaterialIcons name="my-location" size={24} color="black" />
      </Pressable>

      {error && <Text>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
