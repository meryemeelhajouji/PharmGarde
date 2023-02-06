import React from "react";
import { Avatar, Button, Card, Text,List } from "react-native-paper";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CardPharma = () => {
  return (
    <Card>
      {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
      {/* <Card.Content>
        <Text variant="titleLarge">PHarmacie 1</Text>
        <Text variant="bodyMedium">Open</Text>
      </Card.Content>
      <Card.Cover source={require("../assets//Logo-Pharmacie-1.jpg")} />

     */}

      <List.Item
    title="First Item"
    description="Item description"
    left={props => <List.Image  source={require("../assets//Logo-Pharmacie-1.jpg")}/>}
    
  />
   <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')} >
    Press me
  </Button>
    </Card>
    
  );
};

export default CardPharma;
