import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../component/Button';
import {EllipseIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';
import Input from '../../component/Input';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function EmergencyFitting({navigation}) {
  const BtnHandler = () => {
    navigation.navigate('VerifyPlan');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/BG.png')}
        style={styles.bgImage}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.subContainer}>
              <View style={styles.LogoContainer}>
                <EllipseIcon style={styles.Logo} />
              </View>
              <View style={styles.middContainer}>
                <Text style={[styles.CongratulationTxt, CustomFont.Roboto_Bol]}>
                  Is that an Emergency Fitting?
                </Text>
                <View style={styles.messageContainer}>
                  <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                    Please select an option
                  </Text>
                </View>
              </View>

              <Button
                btnStyle={{marginTop: 20}}
                BtnName="Yes"
                onPress={BtnHandler}
              />
              <Button
                BtnName="No"
                btnStyle={{marginTop: 10, marginBottom: 100}}
                onPress={BtnHandler}
              />
              <TouchableOpacity
                style={styles.BackBtn}
                onPress={() => navigation.goBack()}>
                <Text style={[styles.BackTxt, CustomFont.Roboto_Reg]}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
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
    // flex: 1,
    alignItems: 'center',
    width: windowWidth * 1,
    height: windowHeight * 1,
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
  },

  messageContainer: {
    width: windowWidth * 0.8,
    alignItems: 'center',
    marginBottom: 20,
  },
  messageTxt: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

  Input: {
    marginBottom: 100,
  },

  Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    // top: 90,
  },

  BackBtn: {
    marginTop: 80,
  },
  BackTxt: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
