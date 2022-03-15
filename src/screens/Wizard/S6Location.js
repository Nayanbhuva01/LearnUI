import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../component/Button';
import {EllipseIcon, RightIcon, WrongIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';
import Input from '../../component/Input';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function S4OperatingTime({navigation}) {
  const [location, setLocation] = useState(null);

  const [isValidLocation, setIsValidLocation] = useState(0);

  const locationHandler = () => {
    if (location) {
      if (location.length > 3) {
        setIsValidLocation(1);
      } else {
        setIsValidLocation(2);
      }
    } else {
      setIsValidLocation(0);
    }
  };

  const NextHandler = () => {
    navigation.navigate('S7Picture');
  };

  return (
    <ImageBackground
      source={require('../../../assets/BG.png')}
      style={styles.bgImage}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView>
          <View style={styles.subContainer}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30%',
              }}>
              <View style={styles.LogoContainer}>
                <EllipseIcon style={styles.Logo} />
              </View>
              <View style={styles.middContainer}>
                <Text style={[styles.CongratulationTxt, CustomFont.Roboto_Bol]}>
                  Step 6. Location
                </Text>
                <View style={styles.messageContainer}>
                  <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                    Please name Fitting Location (ex. Livingroom)
                  </Text>
                </View>
              </View>
              <Input
                placeholder="Livingroom"
                onChangeText={value => setLocation(value)}
                onEndEditing={locationHandler}
                isValid={isValidLocation}
              />
            </View>
            <View style={styles.Buttons}>
              <Button BtnName="Next" onPress={NextHandler} />
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text
                  style={[
                    {
                      color: '#fff',
                      textDecorationLine: 'underline',
                      marginTop: 10,
                    },
                    CustomFont.Roboto_Reg,
                  ]}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 1,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  LogoContainer: {
    marginBottom: 30,
  },

  middContainer: {
    alignItems: 'center',
    marginBottom: 20,
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

  Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
