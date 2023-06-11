import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FavBarImage = () => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      onPress={() => {
        navigation.navigate('Favorites');
      }}>
      <Image
        source={{
          uri: 'https://w7.pngwing.com/pngs/501/448/png-transparent-favourite-chart-favorites-heart-rating-top-web-icon.png',
        }}
        style={{
          width: 40,
          height: 40,
          marginLeft: 15,
          backgroundColor: '#fff',
          borderRadius: 50,
        }}
      />
    </TouchableOpacity>
  );
};

export default FavBarImage;
