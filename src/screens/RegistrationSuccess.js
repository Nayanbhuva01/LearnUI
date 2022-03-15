import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {EllipseIcon} from '../../assets/svgs';
import CustomFont from '../utils/CustomFont';
import Button from '../component/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RegistrationSuccess({navigation}) {
  const OKHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.bgImage}>
      <View style={styles.container}>
        <EllipseIcon style={styles.LogoContainer} />
        <View style={styles.middContainer}>
          <Text style={[styles.CongratulationTxt, CustomFont.Roboto_Bol]}>
            CONGRATULATIONS!
          </Text>
          <View style={styles.messageContainer}>
            <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
              Your account has been successfully Registered.
            </Text>
            <Text style={[styles.messageTxt, CustomFont.Roboto_Regular]}>
              Please click on confirmation link to confirm your account.
            </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button BtnName="OK" onPress={OKHandler} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 1,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoContainer: {
    marginBottom: 30,
  },

  middContainer: {
    alignItems: 'center',
  },
  CongratulationTxt: {
    color: '#fff',
    fontSize: 25,
    fontFamily: '',
  },

  messageContainer: {
    width: windowWidth * 1,
    alignItems: 'center',
    marginBottom: '20%',
  },
  messageTxt: {
    color: '#fff',
    fontSize: 14,
  },

  buttons: {
    marginTop: 50,
  },
});
