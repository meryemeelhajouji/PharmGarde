import React from 'react';
import { Text, View } from 'react-native';
import CardPharmacy from '../component/CardPharmacy';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const Pharmacie = () => {
  const [Pharmacy, SetPharmacy] = useState([]);
  const URL = 'http://10.0.2.2:5000/api/pharmacy/';
  function GetPharmacy() {
    axios.get(URL).then((response) => {
      SetPharmacy(response.data);
    });
  }
  useEffect(() => {
    GetPharmacy();
  }, []);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      
      {Pharmacy.map((data) => (
        <CardPharmacy key={data.id} data={data} />
      ))}
    </View>
  );
};

export default Pharmacie;
