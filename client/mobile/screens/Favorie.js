import React, { useState, useEffect } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

const Favorie = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites')
    .then(favoritesString => {
      setFavorites(JSON.parse(favoritesString) || []);
    });
  }, []);

  const addToFavorites = item => {
    console.log('Before adding:', favorites);
    setFavorites([...favorites, item]);
    console.log('After adding:', favorites); 
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  };

  // {
  //   id: "idPharmacy",
  //   name: 'name',
  //   description: "desc",
  //   location: [lat, long]
  // }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text style={{ fontSize: 20 }}>Favorites</Text>


      <Button title="Add to Favorites"
        onPress={() => addToFavorites({ item: 'Item' })}/>
        
    </View>
  );
};

export default Favorie;
