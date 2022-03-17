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
import WithBackground from '../../hoc/WithBackground';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function S4OperatingTime({navigation}) {
  const [power, setPower] = useState(null);

  const [isValidPower, setIsValidPower] = useState(0);

  const powerHandler = () => {
    if (power) {
      if (power.length >= 1 && power >= 1) {
        setIsValidPower(1);
      } else {
        setIsValidPower(2);
      }
    } else {
      setIsValidPower(0);
    }
  };

  const NextHandler = () => {
    navigation.navigate('S6Location');
  };

  return (
    <WithBackground>
      <View style={styles.subContainer}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View style={styles.LogoContainer}>
            <EllipseIcon style={styles.Logo} />
          </View>
          <View style={styles.middContainer}>
            <Text style={[styles.CongratulationTxt, CustomFont.Roboto_Bol]}>
              Step 5. Power
            </Text>
            <View style={styles.messageContainer}>
              <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                How many Watts they is their Power?
              </Text>
            </View>
          </View>

          <View style={styles.InpContainer}>
            <Text style={[styles.labelTxt, CustomFont.Roboto_Reg]}>Power:</Text>
            <View style={styles.Input}>
              <TextInput
                style={styles.coInput}
                placeholder="60"
                placeholderTextColor={'#ddd'}
                keyboardType="numeric"
                onChangeText={value => setPower(value)}
                onEndEditing={powerHandler}
              />
            </View>
            <Text style={[styles.pcsTxt, CustomFont.Roboto_Reg]}>W</Text>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {isValidPower === 0 ? null : isValidPower === 1 ? (
                <RightIcon style={styles.Icon} />
              ) : (
                <WrongIcon style={styles.Icon} />
              )}
            </View>
          </View>
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
    marginTop: 30,
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

  InpContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    alignItems: 'center',
    marginBottom: 5,
  },
  Input: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: windowWidth * 0.4,
    marginLeft: 10,
    marginRight: 10,
    flex: 4,
  },
  coInput: {
    color: '#fff',
    textAlign: 'center',
  },
  labelTxt: {
    color: '#fff',
    fontSize: 14,
    flex: 2,
    textAlign: 'right',
  },
  pcsTxt: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
  Buttons: {
    alignItems: 'center',
    marginBottom: 10,
  },
});
