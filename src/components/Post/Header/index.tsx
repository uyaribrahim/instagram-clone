import React from 'react';
import {Image, Text, View} from 'react-native';
import {heightPercentageToDP as dh} from '../../../utils/responsive';

const Header = (props: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{
            width: dh(6),
            height: dh(6),
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#ffffff',
          }}
          source={require('../../../../assets/images/profile.jpg')}
        />
        <Text
          style={{left: 8, fontWeight: '700', color: 'black', fontSize: dh(2)}}>
          ibrahim
        </Text>
      </View>
      <Image
        style={{width: dh(5), height: dh(5)}}
        source={{uri: 'https://img.icons8.com/windows/72/menu-2.png'}}
        resizeMode={'center'}
      />
    </View>
  );
};

export default Header;
