import { View, StyleSheet, Pressable, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { getGardingPharmacies } from '../utils/api';
import PharmacyMarker from '../component/PharmacyMarker';

const Map = () => {
  const [myRegion, setMyRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [pharmacies, setPharmacies] = useState([]);
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

  useEffect(() => {
    const getPharmacies = async () => {
      const pharmacies = await getGardingPharmacies();
      setPharmacies(pharmacies.data);
    };
    getPharmacies();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={myRegion} provider="google">
        <Marker coordinate={myRegion} title="My Location" description="This is my location" />
        {pharmacies.map((pharmacy) => (
          <Marker
            key={pharmacy._id}
            coordinate={{
              latitude: pharmacy.location.coordinates[1],
              longitude: pharmacy.location.coordinates[0],
            }}
            title={pharmacy.name}
            description={pharmacy.address}
          >
            <PharmacyMarker />
          </Marker>
        ))}
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
