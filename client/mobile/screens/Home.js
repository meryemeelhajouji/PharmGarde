import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import Pharmacry from '../assets/Pharmacist-cuate.png';
import Pharmabro from '../assets/Pharmacist-bro.png';
import Pharmacy from '../assets/Pharmacist-pana.png';
const Home = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
      <View style={styles.slide}>
        <Text style={styles.title}>Garde Pharmacy</Text>
        <Image source={require('../assets/Pharmacist-cuate.png')} style={styles.image} />
        <Text style={styles.text}>
          "Pharmacy Garde is dedicated to providing high-quality healthcare. Our pharmacists are available 24/7 to
          assist with any medication needs."
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require('../assets/Pharmacist-bro.png')} style={styles.image} />
        <Text style={styles.text}>
          "Pharmacy Garde promotes preventative care for a healthier you. Our pharmacists offer expert advice on health
          and wellness
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require('../assets/Pharmacist-pana.png')} style={styles.image} />
        <Text style={[styles.text, { marginBottom: 26 }]}>
          "Pharmacy Garde supports chronic condition management. Our pharmacists create personalized medication plans
          for optimal treatment outcomes.
        </Text>
        <Button title="Start" color="#3E7C17" />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '45%',
  },
  text: {
    color: 'dark',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  title: {
    color: '#3E7C17',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;
