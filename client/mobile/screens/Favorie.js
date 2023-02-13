import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardPharmacy from '../component/CardPharmacy';

const Favorie = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = (await AsyncStorage.getItem('favorites')) || '[]';
      setFavorites(JSON.parse(data));
    };
    fetchFavorites();
  }, []);

  return (
    <View>
      {favorites.length === 0 ? (
        <Text>No favorites</Text>
      ) : (
        favorites.map((data) => <CardPharmacy fav={true} key={data._id} data={data} />)
      )}
    </View>
  );
};

export default Favorie;
