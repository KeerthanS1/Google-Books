import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
const ClearIcon = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/60/60994.png',
        }}
        style={{
          width: 20,
          height: 20,
          backgroundColor: '#fff',
        }}
      />
    </TouchableOpacity>
  );
};

export default ClearIcon;
