import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import useAddToFavHook from './hooks/useAddToFavHook';

interface props {
  navigation: any;
  route: any;
}

const SingleBookScreen: React.FunctionComponent<props> = ({
  navigation,
  route,
}) => {
  const bookData = route.params.params;
  const {handleAddtoFavCallback, addedToFav, handleDeleteFavCallback} =
    useAddToFavHook(bookData);
  return (
    <View
      style={{
        padding: 18,
      }}>
      <View style={styles.bookPrimaryDetails}>
        {bookData?.volumeInfo?.imageLinks?.thumbnail ? (
          <Image
            style={styles.bookCoverImg}
            source={{
              uri: bookData?.volumeInfo?.imageLinks?.thumbnail,
            }}
          />
        ) : (
          <View style={styles.coverPlaceHolder}>
            <Text>No Cover Image</Text>
          </View>
        )}
        <View
          style={{
            marginLeft: 8,
            flex: 1,
          }}>
          <Text style={styles.title}>{bookData?.volumeInfo?.title}</Text>
          <Text style={styles.description}>
            {bookData?.volumeInfo?.subtitle}
          </Text>
          {bookData?.volumeInfo?.authors?.length ? (
            <Text numberOfLines={1} style={styles.author}>
              Author: {bookData?.volumeInfo?.authors[0]}
            </Text>
          ) : null}
          <Text style={styles.publishedOn}>
            Published on: {bookData?.volumeInfo?.publishedDate}
          </Text>
        </View>
      </View>
      {addedToFav ? (
        <Button
          title="Delete to favorites"
          onPress={() => {
            handleDeleteFavCallback(bookData);
          }}
        />
      ) : (
        <Button
          title="Add to favorites"
          onPress={() => {
            handleAddtoFavCallback(bookData);
          }}
        />
      )}
      <View
        style={{
          marginTop: 12,
        }}>
        <Text style={styles.description}>
          {bookData?.volumeInfo?.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookCoverImg: {
    height: 150,
    borderRadius: 8,
    width: 100,
  },
  coverPlaceHolder: {
    height: 150,
    width: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e0e0e0',
  },
  bookPrimaryDetails: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#000',
  },
  publishedOn: {
    marginTop: 8,
  },
  author: {
    color: '#000',
    marginTop: 8,
  },
});

export default SingleBookScreen;
