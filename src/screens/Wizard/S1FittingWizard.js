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

export default function S1FittingWizard({navigation}) {
  const [fittingName, setFittingName] = useState(null);

  const [isValidName, setIsValidName] = useState(0);

  const FittingNameHandler = () => {
    if (fittingName) {
      if (fittingName.length > 7) {
        setIsValidName(1);
      } else {
        setIsValidName(2);
      }
    } else {
      setIsValidName(0);
    }
  };

  const NextHandler = () => {
    navigation.navigate('FittingType');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/BG.png')}
        style={styles.bgImage}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView>
            <View style={styles.subContainer}>
              <View style={styles.LogoContainer}>
                <EllipseIcon style={styles.Logo} />
              </View>
              <View style={styles.middContainer}>
                <Text style={[styles.CongratulationTxt, CustomFont.Roboto_Bol]}>
                  Step 1. Fitting Name
                </Text>
                <View style={styles.messageContainer}>
                  <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                    Please enter your Fitting Name.
                  </Text>
                </View>
              </View>

              <View style={styles.Input}>
                <Input
                  placeholder="Test Fitting #1"
                  onChangeText={value => setFittingName(value)}
                  onEndEditing={FittingNameHandler}
                  isValid={isValidName}
                />
              </View>

              <View style={styles.Buttons}>
                <Button BtnName="Next" onPress={NextHandler} />
                <TouchableOpacity
                  onPress={() => navigation.navigate('CreateFittings')}>
                  <Text
                    style={[
                      {
                        color: '#fff',
                        textDecorationLine: 'underline',
                        marginTop: 10,
                      },
                      CustomFont.Roboto_Reg,
                    ]}>
                    Skip Wizzard
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

  Input: {
    marginBottom: 100,
  },

  Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    // top: 90,
  },
});
