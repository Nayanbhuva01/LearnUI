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
import WithBackground from '../../hoc/WithBackground';

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

  Buttons: {
    alignItems: 'center',
    marginBottom: 10,
  },
});
