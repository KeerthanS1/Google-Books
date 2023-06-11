import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import useSearchInputHook from './hooks/useSearchInputHook';
import BooksList from './inc/books-list';

interface props {
  navigation: any;
}

const HomeScreen: React.FunctionComponent<props> = ({navigation}) => {
  const {
    handleOnChangeSearchInput,
    searchInput,
    booksList,
    handleClick,
    isLoading,
  } = useSearchInputHook(navigation);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={handleOnChangeSearchInput}
        value={searchInput}
        placeholder="Search book here..."
      />
      {/* <ClearIcon /> */}
      {isLoading && !booksList?.length ? (
        <ActivityIndicator size="large" />
      ) : (
        <BooksList booksList={booksList} handleClick={handleClick} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen;
