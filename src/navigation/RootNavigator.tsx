import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import KeyChain from 'react-native-keychain';
import {RootStackParamList} from '../../types';
import InstagramContext from '../context/InstagramContext';
import LoginScreen from '../screens/LoginScreen';
import SignedInNavigator from './SignedInNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const {isLogin, setIsLogin} = useContext(InstagramContext);
  const [checking, setChecking] = useState(true);

  React.useEffect(() => {
    async function checkUser() {
      try {
        const data = await KeyChain.getGenericPassword();
        if (data) {
          setIsLogin(true);
          setChecking(false);
        } else {
          // console.log('Giriş yapmış kullanıcı yok');
          setIsLogin(false);
          setChecking(false);
        }
      } catch (error) {
        // console.log(error);
        setChecking(false);
      }
    }

    checkUser();
  }, []);

  if (checking) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color="#0095f6" />
      </View>
    );
  }
  return (
    <Stack.Navigator>
      {!isLogin ? (
        <Stack.Screen
          name={'Login'}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name={'SignedIn'}
          component={SignedInNavigator}
          options={{
            headerShown: true,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
