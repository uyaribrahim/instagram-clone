import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../../types';
import Feed from '../components/Feed';
import {heightPercentageToDP} from '../utils/responsive';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}
const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, marginTop: heightPercentageToDP(1)}}>
      <Feed />
    </View>
  );
};

export default HomeScreen;
