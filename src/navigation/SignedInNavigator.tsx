import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, {FC, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import KeyChain from 'react-native-keychain';
import {RootStackParamList} from '../../types';
import SearchBar from '../components/SearchBar';
import StyledButton from '../components/StyledButton';
import InstagramContext from '../context/InstagramContext';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import {
  heightPercentageToDP as dh,
  widthPercentageToDP as dw,
} from '../utils/responsive';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface SignedInNavigatorProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignedIn'>;
}

const SignedInNavigator: FC<SignedInNavigatorProps> = ({navigation}) => {
  const {setIsLogin} = useContext(InstagramContext);

  async function handleLogout() {
    await KeyChain.resetGenericPassword();
    setIsLogin(false);
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={styles.header}>
          <SearchBar navigation={navigation} />
          <StyledButton
            containerStyle={{width: dw(20), height: dh(4)}}
            content="Çıkış Yap"
            onPress={handleLogout}
          />
        </View>
      ),
    });
  });

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          headerShown: false,
          animation: 'none',
        }}
      />
      <Stack.Screen
        name={'Search'}
        component={SearchScreen}
        options={{
          headerShown: false,
          animation: 'none',
        }}
      />
    </Stack.Navigator>
  );
};

export default SignedInNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
    height: dh(7),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
