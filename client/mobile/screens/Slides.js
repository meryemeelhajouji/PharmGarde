import IntroSlider from 'react-native-app-intro-slider';
import Pharmacry from '../assets/Pharmacist-cuate.png';
import Pharmabro from '../assets/Pharmacist-bro.png';
import Pharmacy from '../assets/Pharmacist-pana.png';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Navigator from '../navigation/Navigator';

const slides = [
  {
    key: 1,
    title: 'Garde Pharmacy',
    text: 'Pharmacy Garde is dedicated to providing high-quality healthcare. Our pharmacists are available 24/7 to assist with any medication needs.',
    image: Pharmacry,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Garde Pharmacy',
    text: 'Pharmacy Garde promotes preventative care for a healthier you. Our pharmacists offer expert advice on health and wellness',
    image: Pharmabro,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Garde Pharmacy',
    text: 'Pharmacy Garde supports chronic condition management. Our pharmacists create personalized medication plans for optimal treatment outcomes.',
    image: Pharmacy,
    backgroundColor: '#22bcb5',
  },
];

const Slides = () => {
  const [showSlides, setShowSlides] = useState(true);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <MaterialIcons name="navigate-next" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  const _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <MaterialIcons name="navigate-before" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <MaterialIcons name="done" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  const _onDone = () => {
    setShowSlides(false);
  };

  return showSlides ? (
    <IntroSlider
      data={slides}
      renderItem={_renderItem}
      showSkipButton={true}
      showPrevButton={true}
      showNextButton={true}
      renderNextButton={_renderNextButton}
      renderPrevButton={_renderPrevButton}
      renderDoneButton={_renderDoneButton}
      onDone={_onDone}
      dotStyle={{
        backgroundColor: '#22bcb5',
      }}
      activeDotStyle={{
        backgroundColor: '#3E7C17',
      }}
    />
  ) : (
    <Navigator />
  );
};

const styles = StyleSheet.create({
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
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Slides;
