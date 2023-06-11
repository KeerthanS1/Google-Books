import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Keyboard,
  Button,
  TouchableOpacity,
} from 'react-native';

interface props {
  booksList: any;
  handleClick: Function;
}

type ItemProps = {
  title: string;
  coverImg: string;
  authors: any;
  handleClick: any;
  bookData: any;
};

const Item = ({title, coverImg, authors, handleClick, bookData}: ItemProps) => (
  <TouchableOpacity
    onPress={() => {
      handleClick(bookData);
    }}
    style={styles.singleBook}>
    {coverImg ? (
      <Image
        style={styles.bookCoverImg}
        source={{
          uri: coverImg,
        }}
      />
    ) : (
      <View style={styles.coverPlaceHolder}>
        <Text>No Cover Image</Text>
      </View>
    )}
    <Text numberOfLines={1} style={styles.title}>
      {title}
    </Text>
    {authors?.length ? <Text numberOfLines={1}>{authors[0]}</Text> : null}
  </TouchableOpacity>
);

const BooksList: React.FunctionComponent<props> = ({
  booksList,
  handleClick,
}) => {
  return (
    <View style={styles.booksView}>
      <FlatList
        data={booksList}
        onScrollBeginDrag={() => Keyboard.dismiss()}
        renderItem={({item}) => (
          <Item
            title={item?.volumeInfo?.title}
            authors={item?.volumeInfo?.authors}
            coverImg={item?.volumeInfo?.imageLinks?.thumbnail}
            handleClick={handleClick}
            bookData={item}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 180,
        }}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  singleBook: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 4,
    marginVertical: 12,
  },
  booksView: {
    padding: 10,
  },
  bookCoverImg: {
    height: 150,
    borderRadius: 8,
  },
  coverPlaceHolder: {
    height: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e0e0e0',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  addToFav: {
    backgroundColor: '#2196f3',
    padding: 4,
    textAlign: 'center',
    marginTop: 4,
    borderRadius: 4,
  },
  addToFavText: {
    color: '#fff',
    fontWeight: '400',
  },
});

export default BooksList;
