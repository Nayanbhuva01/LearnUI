import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {EllipseIcon} from '../../assets/svgs';
import CustomFont from '../utils/CustomFont';
import Button from '../component/Button';
import WithBackground from '../hoc/WithBackground';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MessageSentForgotPass({navigation}) {
  const OKHandler = () => {
    navigation.navigate('NewPasswordCreate');
  };

  return (
    <WithBackground>
      <View style={styles.subContainer}>
        <View style={{alignItems: 'center'}}>
          <EllipseIcon style={styles.LogoContainer} />
          <View style={styles.middContainer}>
            <Text style={[styles.CongratulationTxt, CustomFont.Roboto_Bol]}>
              CONGRATULATIONS!
            </Text>
            <View style={styles.messageContainer}>
              <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                Confirmation link has been sent to your E-Mail.
              </Text>
              <Text style={[styles.messageTxt, CustomFont.Roboto_Regular]}>
                Please click on the link to confirm your password reset.
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
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
