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
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../component/Button';
import {EllipseIcon, RightIcon, WrongIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function S3Quantity({navigation}) {
  const [quantity, setQuantity] = useState(null);

  const [isValidQuantity, setIsValidQuantity] = useState(0);

  const quantityHandler = () => {
    if (quantity) {
      if (quantity.length >= 1 && quantity >= 1) {
        setIsValidQuantity(1);
      } else {
        setIsValidQuantity(2);
      }
    } else {
      setIsValidQuantity(0);
    }
  };

  const NextHandler = () => {
    navigation.navigate('S4OperatingTime');
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
                  Step 3. Quantity
                </Text>
                <View style={styles.messageContainer}>
                  <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                    How many those fittings you have?
                  </Text>
                </View>
              </View>

              <View style={styles.InpContainer}>
                <Text style={[styles.labelTxt, CustomFont.Roboto_Reg]}>
                  Quantity:
                </Text>
                <View style={styles.Input}>
                  <TextInput
                    style={styles.coInput}
                    placeholder="4"
                    placeholderTextColor={'#ddd'}
                    keyboardType="numeric"
                    onChangeText={value => setQuantity(value)}
                    onEndEditing={quantityHandler}
                  />
                </View>
                <Text style={[styles.pcsTxt, CustomFont.Roboto_Reg]}>pcs</Text>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {isValidQuantity === 0 ? null : isValidQuantity === 1 ? (
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
    // marginTop: 30,
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
    // flex: 1,
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
  Icon: {
    flex: 1,
  },
  Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
