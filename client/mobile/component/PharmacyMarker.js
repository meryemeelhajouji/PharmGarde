import React, { useState } from 'react';
import { Animated, Image } from 'react-native';

const PharmacyMarker = ({}) => {
  const [animation] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1],
            }),
          },
        ],
      }}
    >
      <Image source={require('../assets/pharloc.png')} style={{ width: 40, height: 40 }} />
    </Animated.View>
  );
};

export default PharmacyMarker;
