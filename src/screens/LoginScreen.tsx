import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useContext, useState} from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import KeyChain from 'react-native-keychain';
import {RootStackParamList} from '../../types';
import StyledButton from '../components/StyledButton';
import StyledTextInput from '../components/StyledTextInput';
import InstagramContext from '../context/InstagramContext';
import {
  heightPercentageToDP as dh,
  widthPercentageToDP as dw,
} from '../utils/responsive';

interface LoginScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const {setIsLogin} = useContext(InstagramContext);

  function handleLogin() {
    if (!userName || !password) {
      Alert.alert(
        'Uyarı',
        'Giriş yapabilmek için kullanıcı adı ve şifre alanını boş bırakmayın.',
        [{text: 'Tamam', onPress: () => null}],
      );
      return;
    }
    loginUser(userName, password);
  }

  async function loginUser(userName: string, password: string) {
    await KeyChain.setGenericPassword(userName, password);
    setIsLogin(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{width: dw(60), height: dh(8)}}
          source={require('../../assets/images/logo.png')}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.middle}>
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
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  middle: {
    height: dh(28),
    justifyContent: 'space-evenly',
  },
});
