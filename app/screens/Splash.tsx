import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home'); // Navega a la pantalla de inicio de sesión
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../img/splashAll.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;