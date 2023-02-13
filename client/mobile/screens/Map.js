import { View, StyleSheet, Pressable, Text, Modal, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { getGardingPharmacies } from '../utils/api';
import PharmacyMarker from '../component/PharmacyMarker';
import Comment from '../component/Comment';

const Map = () => {
  const [myRegion, setMyRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [comments, setComments] = useState([]);
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
            onPress={() => {
              setSelectedPharmacy(pharmacy);
            }}
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

      <Modal
        animationType="slide"
        transparent={false}
        visible={selectedPharmacy !== null}
        onRequestClose={() => setSelectedPharmacy(null)}
      >
        <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 30, paddingTop: 70 }}>
          <Text style={styles.modal_title}>{selectedPharmacy?.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', opacity: 0.5, marginVertical: 15 }}>
            {/* address */}
            <MaterialIcons name="location-on" size={24} color="black" />
            <Text style={{ marginLeft: 10 }}>{selectedPharmacy?.address}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', opacity: 0.5, marginBottom: 15 }}>
            {/* phone */}
            <MaterialIcons name="phone" size={24} color="black" />
            <Text style={{ marginLeft: 10 }}>{selectedPharmacy?.phone}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', opacity: 0.5, marginBottom: 15 }}>
            {/* region */}
            <MaterialIcons name="location-city" size={24} color="black" />
            <Text style={{ marginLeft: 10 }}>{selectedPharmacy?.location?.region}</Text>
          </View>

          {/* Comments */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Comments</Text>
          </View>

          {/* add */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <TextInput
              style={{
                flex: 1,
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
              placeholder="Add a comment"
            />
            <Pressable
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 50,
                marginLeft: 10,
              }}
              onPress={() => {}}
            >
              <MaterialIcons name="send" size={24} color="black" />
            </Pressable>
          </View>

          {/* Comment */}
          {comments.length == 0 ? (
            <Text style={{ opacity: 0.5 }}>No comments yet</Text>
          ) : (
            comments.map((comment) => <Comment key={comment._id} comment={comment} />)
          )}

          <Pressable
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 50,
            }}
            onPress={() => setSelectedPharmacy(null)}
          >
            <MaterialIcons name="close" size={24} color="black" />
          </Pressable>
        </View>
      </Modal>

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
  modal_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Map;
