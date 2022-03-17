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
import WithBackground from '../hoc/WithBackground';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RegistrationSuccess({navigation}) {
  const OKHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <WithBackground>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
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
        </View>
        <View style={styles.buttons}>
          <Button BtnName="OK" onPress={OKHandler} />
        </View>
      </View>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
  LogoContainer: {
    marginTop: 50,
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
    alignItems: 'center',
    marginBottom: 80,
  },
});
