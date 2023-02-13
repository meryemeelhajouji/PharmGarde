import { ScrollView, View } from 'react-native';
import CardPharmacy from '../component/CardPharmacy';
import { Appbar, TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { getAllPharmacies } from '../utils/api';

const Pharmacie = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [cachedPharmacies, setCachedPharmacies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPharmacies = async () => {
      const data = await getAllPharmacies();
      setPharmacies(data.data);
      setCachedPharmacies(data.data);
    };
    fetchPharmacies();
  }, []);

  const handleChange = (text) => {
    setSearch(text);
    const filtered = cachedPharmacies.filter((pharmacy) => pharmacy.name.toLowerCase().includes(text.toLowerCase()));
    setPharmacies(filtered);
  };

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <TextInput value={search} style={{ width: '100%' }} onChangeText={handleChange} placeholder="Search" />
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
