import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {EllipseIcon} from '../../assets/svgs';
import CustomFont from '../utils/CustomFont';
import Button from '../component/Button';
import WithBackground from '../hoc/WithBackground';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function NewFittingWizard({navigation}) {
  const YesHandler = () => {
    navigation.navigate('S1FittingWizard');
  };

  const NoHandler = () => {
    navigation.navigate('CreateFittings');
  };

  return (
    <WithBackground>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.subContainer}>
          <View style={styles.LogoContainer}>
            <EllipseIcon style={styles.Logo} />
          </View>
          <View style={{flex: 1}}>
            <View style={{justifyContent: 'space-between'}}>
              <View style={styles.middContainer}>
                <Text style={[styles.CongratulationTxt, CustomFont.Roboto_Bol]}>
                  Create New Fitting Wizzard
                </Text>
                <View style={styles.messageContainer}>
                  <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                    Would you like to take wizzard to create new fitting or you
                    want to create it on your own?
                  </Text>
                </View>
              </View>
              <View style={styles.buttons}>
                <Button BtnName="Yes" onPress={YesHandler} />
                <TouchableOpacity style={styles.NoBtn} onPress={NoHandler}>
                  <Text style={styles.Notxt}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text
                  style={[
                    {
                      color: '#fff',
                      textDecorationLine: 'underline',
                      marginBottom: 10,
                    },
                    CustomFont.Roboto_Reg,
                  ]}>
                  Back to Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    alignItems: 'center',
  },
  LogoContainer: {
    marginTop: 30,
    marginBottom: 30,
  },

  middContainer: {
    alignItems: 'center',
  },
  CongratulationTxt: {
    color: '#fff',
    fontSize: 25,
  },

  messageContainer: {
    width: windowWidth * 0.8,
    alignItems: 'center',
  },
  messageTxt: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

  buttons: {
    marginBottom: 100,
  },
  NoBtn: {
    borderRadius: 50,
    backgroundColor: '#FD5086',
    height: windowHeight * 0.08,
    width: windowWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  Notxt: {
    color: '#fff',
    fontSize: 20,
  },
});
