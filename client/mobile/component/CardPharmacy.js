import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LeftContent = (props) => <Avatar.Image size={70} style={{}} source={require('../assets/download.png')} />;

const CardPharmacy = ({ data, fav = false }) => {
  const addToFavotites = async () => {
    // add data to favorites
    try {
      const oldData = (await AsyncStorage.getItem('favorites')) || '[]';
      const newData = JSON.parse(oldData);
      newData.push(data);
      await AsyncStorage.setItem('favorites', JSON.stringify(newData));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          titleStyle={{ marginLeft: 40 }}
          title={data.name}
          subtitle={data.address}
          subtitleStyle={{ marginLeft: 40 }}
          titleVariant="bodyLarge"
          left={LeftContent}
        />
        <Text style={{ marginLeft: 120 }}>{data.phone} </Text>

        <Card.Actions>
          {/* <Avatar.Icon size={24} icon="heart" style={{ backgroundColor: 'green' }} /> */}
          {!fav && (
            <Button icon="plus" mode="outlined " textColor="green" onPress={() => addToFavotites()}>
              Add to favorite
            </Button>
          )}
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CardPharmacy;
