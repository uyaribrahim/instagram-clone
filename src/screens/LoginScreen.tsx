import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../types';
import StyledButton from '../components/StyledButton';
import StyledTextInput from '../components/StyledTextInput';
import {heightPercentageToDP as dh} from '../utils/responsive';

interface LoginScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  function handleLogin() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}></View>
      <View
        style={{
          height: dh(28),
          justifyContent: 'space-evenly',
        }}>
        <StyledTextInput
          containerStyle={{
            alignSelf: 'center',
          }}
          placeholder={'Telefon numarası veya e-posta'}
          value={userName}
          onChangeText={setUserName}
        />
        <StyledTextInput
          containerStyle={{
            alignSelf: 'center',
          }}
          placeholder={'Şifre'}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <StyledButton
          content="Giriş Yap"
          containerStyle={{alignSelf: 'center'}}
          activeOpacity={0.9}
          onPress={handleLogin}
        />
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
