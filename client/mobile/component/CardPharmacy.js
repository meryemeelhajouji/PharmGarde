import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Image size={70} style={{}} source={require('../assets/download.png')} />;


const CardPharmacy = (props) => {
  // const { name, naaddresse, phone } = data;
  return (
    <View>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          titleStyle={{ marginLeft: 40 }}
          title={props.data.name}
          subtitle={props.data.address}
          subtitleStyle={{ marginLeft: 40 }}
          titleVariant="bodyLarge"
          left={LeftContent}
        />
        <Text style={{ marginLeft: 120 }}>{props.data.phone} </Text>

        <Card.Actions>
          {/* <Avatar.Icon size={24} icon="plus" style={{backgroundColor:"green"}}/> */}
          {/* <Button icon="plus" mode="outlined " textColor="green" onPress={() => console.log('Pressed')}> */}

          {/* </Button> */}
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CardPharmacy;
