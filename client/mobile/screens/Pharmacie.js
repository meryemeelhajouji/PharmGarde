import React from 'react';
import { ScrollView, View } from 'react-native';
import CardPharmacy from '../component/CardPharmacy';
import { Appbar } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { getAllPharmacies } from '../utils/api';

const Pharmacie = () => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    const fetchPharmacies = async () => {
      const data = await getAllPharmacies();
      setPharmacies(data.data);
    };
    fetchPharmacies();
  }, []);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="All Pharmacies" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 30,
        }}
      >
        {pharmacies.map((data) => (
          <CardPharmacy key={data._id} data={data} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Pharmacie;
