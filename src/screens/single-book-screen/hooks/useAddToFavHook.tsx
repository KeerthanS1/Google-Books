import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeToLocalData} from '../../../config/storage';
import Toast from 'react-native-toast-message';

const useAddToFavHook = (bookData: any) => {
  const [addedToFav, setAddedToFav] = useState(false);
  const handleAddtoFavCallback = async (book: any) => {
    let storedData: any = await AsyncStorage.getItem('google_books_fav').then(
      (res: any) => {
        return res;
      },
    );
    if (storedData !== null) {
      let parsedData: any = JSON.parse(storedData);
      let isSaved = false;
      parsedData.forEach((element: any) => {
        if (element?.id == book?.id) {
          isSaved = true;
        }
      });
      if (isSaved) {
        // already saved in fav
        setAddedToFav(true);
      } else {
        parsedData.push(book);
        await storeToLocalData('google_books_fav', parsedData);
        setAddedToFav(true);
        Toast.show({
          type: 'success',
          text1: 'Added to favorites',
        });
      }
    } else {
      await storeToLocalData('google_books_fav', [book]);
    }
  };

  const handleDeleteFavCallback = async (book: any) => {
    let storedData: any = await AsyncStorage.getItem('google_books_fav').then(
      (res: any) => {
        return res;
      },
    );
    let parsedData: any = JSON.parse(storedData);
    let filteredData = parsedData.filter((data: any) => data?.id != book?.id);
    await storeToLocalData('google_books_fav', filteredData);
    setAddedToFav(false);
  };

  const getFavBooks = async () => {
    let storedData: any = await AsyncStorage.getItem('google_books_fav').then(
      (res: any) => {
        return res;
      },
    );
    let parsedData: any = JSON.parse(storedData);
    parsedData?.forEach((data: any) => {
      if (data?.id == bookData?.id) {
        setAddedToFav(true);
      }
    });
  };

  useEffect(() => {
    getFavBooks();
  }, [bookData]);

  return {handleAddtoFavCallback, addedToFav, handleDeleteFavCallback};
};

export default useAddToFavHook;
