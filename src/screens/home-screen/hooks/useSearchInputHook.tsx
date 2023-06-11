import React, {useState, useEffect} from 'react';
import {get} from '../../../config/axios-client';
import Toast from 'react-native-toast-message';

const useSearchInputHook = (navigation: any) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [booksList, setBooksList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debounce = (func: any) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, 1000);
    };
  };

  const handleOnChangeSearchInput = (value: string) => {
    setSearchInput(value);
    handleSetSearchInput(value);
  };

  const handleSetSearchInput = debounce((value: string) =>
    handleGetSearchedBooks(value),
  );

  const handleGetSearchedBooks = (value: any) => {
    setIsLoading(true);
    get('volumes', {
      q: value,
    })
      .then((res: any) => {
        setIsLoading(false);
        setBooksList(res.data.items);
      })
      .catch((error: any) => {
        setIsLoading(false);
        Toast.show({
          type: 'error',
          text1: 'No books found',
        });
      });
  };

  const handleClick = (bookData: any) => {
    navigation.navigate('Single Book', {
      screen: 'Single Book',
      params: bookData,
    });
  };

  return {
    handleOnChangeSearchInput,
    searchInput,
    booksList,
    handleClick,
    isLoading,
  };
};

export default useSearchInputHook;
