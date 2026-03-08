import React, { useEffect } from 'react';
import { View, Image, StyleSheet} from 'react-native';

export default function StartScreen({ navigation }) {

    useEffect(() => {
      const timeout = setTimeout(() => {
        navigation.replace('Auth'); 
      }, 2500); // 2.5 sec
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/splash.png')}

          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, backgroundColor: '#fbf5ed', justifyContent: 'center', alignItems: 'center',
    },
    logo: {
      width: 370,
      height: 370,
    },
  });