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
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../component/Button';
import {EllipseIcon, RightIcon, WrongIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';
import Input from '../../component/Input';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function S2NormalSize({navigation}) {
  const [length, setLength] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const [isValidLength, setIsValidLength] = useState(0);
  const [isValidWidth, setIsValidWidth] = useState(0);
  const [isValidHeight, setIsValidHeight] = useState(0);

  const lengthHandler = () => {
    if (length) {
      if (length.length >= 2) {
        setIsValidLength(1);
      } else {
        setIsValidLength(2);
      }
    } else {
      setIsValidLength(0);
    }
  };
  const widthHandler = () => {
    if (width) {
      if (width.length >= 2) {
        setIsValidWidth(1);
      } else {
        setIsValidWidth(2);
      }
    } else {
      setIsValidWidth(0);
    }
  };
  const heightHandler = () => {
    if (height) {
      if (height.length >= 2) {
        setIsValidHeight(1);
      } else {
        setIsValidHeight(2);
      }
    } else {
      setIsValidHeight(0);
    }
  };

  const NextHandler = () => {
    navigation.navigate('S3Quantity');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/BG.png')}
        style={styles.bgImage}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              width: windowWidth * 1,
              paddingBottom: 20,
            }}>
            <View style={styles.subContainer}>
              <View style={styles.LogoContainer}>
                <EllipseIcon style={styles.Logo} />
              </View>
              <View style={styles.middContainer}>
                <Text style={[styles.CongratulationTxt, CustomFont.Roboto_Bol]}>
                  Step 2. Fitting Size
                </Text>
                <View style={styles.messageContainer}>
                  <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                    Please enter the size of your Fittings.
                  </Text>
                </View>
              </View>

              <View style={styles.InpContainer}>
                <Text style={styles.labelTxt}>Lenght:</Text>
                <View style={styles.Input}>
                  <TextInput
                    style={styles.coInput}
                    placeholder="1800"
                    placeholderTextColor={'#ddd'}
                    keyboardType="numeric"
                    onChangeText={value => setLength(value)}
                    onEndEditing={lengthHandler}
                  />
                </View>
                <Text style={styles.mmTxt}>mm</Text>
                <View style={styles.IconContainer}>
                  {isValidLength === 0 ? null : isValidLength === 1 ? (
                    <RightIcon style={styles.Icon} />
                  ) : (
                    <WrongIcon style={styles.Icon} />
                  )}
                </View>
              </View>

              <View style={styles.InpContainer}>
                <Text style={styles.labelTxt}>Width:</Text>
                <View style={styles.Input}>
                  <TextInput
                    style={styles.coInput}
                    placeholder="600"
                    placeholderTextColor={'#ddd'}
                    keyboardType="numeric"
                    onChangeText={value => setWidth(value)}
                    onEndEditing={widthHandler}
                  />
                </View>
                <Text style={styles.mmTxt}>mm</Text>
                <View style={styles.IconContainer}>
                  {isValidWidth === 0 ? null : isValidWidth === 1 ? (
                    <RightIcon style={styles.Icon} />
                  ) : (
                    <WrongIcon style={styles.Icon} />
                  )}
                </View>
              </View>

              <View style={styles.InpContainer}>
                <Text style={styles.labelTxt}>Height:</Text>
                <View style={styles.Input}>
                  <TextInput
                    style={styles.coInput}
                    placeholder="30"
                    placeholderTextColor={'#ddd'}
                    keyboardType="numeric"
                    onChangeText={value => setHeight(value)}
                    onEndEditing={heightHandler}
                  />
                </View>
                <Text style={styles.mmTxt}>mm</Text>
                <View style={styles.IconContainer}>
                  {isValidHeight === 0 ? null : isValidHeight === 1 ? (
                    <RightIcon style={styles.Icon} />
                  ) : (
                    <WrongIcon style={styles.Icon} />
                  )}
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
                        marginTop: 30,
                      },
                      CustomFont.Roboto_Reg,
                    ]}>
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 20,
  },
  messageTxt: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

  InpContainer: {
    flex: 1,
    flexDirection: 'row',
    width: windowWidth * 0.7,
    alignItems: 'center',
    marginBottom: 5,
  },
  Input: {
    flex: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginLeft: 10,
    marginRight: 10,
  },
  coInput: {
    color: '#fff',
    textAlign: 'center',
  },
  labelTxt: {
    flex: 2,
    color: '#fff',
    fontSize: 14,
  },
  mmTxt: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
  IconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    // top: 90,
  },
});
