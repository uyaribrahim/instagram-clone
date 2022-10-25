import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../../types';
import Grid from '../components/Grid';
import {heightPercentageToDP} from '../utils/responsive';

interface SearchScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Search'>;
}

const SearchScreen: FC<SearchScreenProps> = ({navigation}) => {
  return (
    <View
      style={{
        marginTop: heightPercentageToDP(1),
        flex: 1,
      }}>
      <Grid />
    </View>
  );
};

export default SearchScreen;
