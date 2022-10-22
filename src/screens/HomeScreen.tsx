import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../types';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>a component</Text>
    </View>
  );
};

export default HomeScreen;
