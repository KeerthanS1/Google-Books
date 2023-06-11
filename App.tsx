/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home-screen/home-screen';
import SingleBookScreen from './src/screens/single-book-screen/single-book-screen';
import FavoritesScreen from './src/screens/favorites-screen/favorites-screen';
import FavBarImage from './src/components/fav-bar-img';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Search Books"
            component={HomeScreen}
            options={{
              title: 'Home', //Set Header Title
              headerTintColor: 'black', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <FavBarImage />,
            }}
          />
          <Stack.Screen name="Single Book" component={SingleBookScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default App;
