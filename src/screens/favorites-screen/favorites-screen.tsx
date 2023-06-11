import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import BooksList from '../home-screen/inc/books-list';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface props {
  navigation: any;
}

const FavoritesScreen: React.FunctionComponent<props> = ({navigation}) => {
  const [booksList, setBooksList] = useState([]);
  const handleClick = (bookData: any) => {
    navigation.navigate('Single Book', {
      screen: 'Single Book',
      params: bookData,
    });
  };

  const getFavBooks = async () => {
    let storedData: any = await AsyncStorage.getItem('google_books_fav').then(
      (res: any) => {
        return res;
      },
    );
    setBooksList(JSON.parse(storedData));
  };

  useEffect(() => {
    getFavBooks();
  }, []);

  return (
    <View>
      <BooksList booksList={booksList} handleClick={handleClick} />
    </View>
  );
};

export default FavoritesScreen;
