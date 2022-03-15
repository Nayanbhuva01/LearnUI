import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {
  BlockIcon,
  LogoIcon,
  OopsIcon,
  RightIcon,
  WrongIcon,
} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';
import {Picker} from '@react-native-picker/picker';
import Input from '../../component/Input';
import Button from '../../component/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function VerifyPlan({navigation}) {
  const [power, setPower] = useState();

  const pickerRef = useRef();

  const open = () => {
    pickerRef.current.focus();
  };

  const close = () => {
    pickerRef.current.blur();
  };

  const OkHandler = () => {
    navigation.navigate('FittingSuccess');
  };

  useEffect(() => {
    open();
    close();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/BG.png')}
        style={styles.BGImage}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <View style={styles.LogoBG}>
              <LogoIcon style={styles.Logo} />
            </View>
            <Text style={[styles.AText, CustomFont.Roboto_Bol]}>
              New Fitting
            </Text>
            <View style={styles.FContainer}>
              <View style={styles.InnContainer}>
                <Text style={styles.labelTxt}>New Fitting Power:</Text>
                <Picker
                  style={styles.picker}
                  ref={pickerRef}
                  selectedValue={power}
                  onValueChange={(itemValue, itemIndex) => setPower(itemValue)}>
                  <Picker.item label="60W" value="60w" />
                  <Picker.item label="90W" value="90w" />
                </Picker>
              </View>
              <View style={styles.InnContainer}>
                <Text style={styles.labelTxt}>Image:</Text>
                <View style={{flex: 1}}>
                  <Image source={require('../../../assets/SMimage.png')} />
                </View>
              </View>
              <View style={styles.InnContainer}>
                <Text style={styles.labelTxt}>Quantity:</Text>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: '#EEEEEE',
                  }}>
                  <TextInput
                    style={{textAlign: 'center'}}
                    placeholder="5"
                    placeholderTextColor={'#000'}
                  />
                </View>
              </View>
            </View>
            <View style={{width: windowWidth * 0.8}}>
              <View style={styles.InnContainer}>
                <Text style={styles.outLabelTxt}>Fitting cost:</Text>
                <View style={styles.outerInput}>
                  <TextInput
                    style={{textAlign: 'center', color: '#fff'}}
                    placeholder="729.00"
                    placeholderTextColor={'#fff'}
                    keyboardType="number-pad"
                  />
                </View>
                <Text style={styles.symbolTxt}>€</Text>
              </View>
              <View style={styles.InnContainer}>
                <Text style={styles.outLabelTxt}>Labour Cost:</Text>
                <View style={styles.outerInput}>
                  <TextInput
                    style={{textAlign: 'center', color: '#fff'}}
                    placeholder="55.00"
                    placeholderTextColor={'#fff'}
                    keyboardType="number-pad"
                  />
                </View>
                <Text style={styles.symbolTxt}>€</Text>
              </View>
              <View style={styles.InnContainer}>
                <Text style={styles.outLabelTxt}>Accessories & Plan Cost:</Text>
                <View style={styles.outerInput}>
                  <TextInput
                    style={{textAlign: 'center', color: '#fff'}}
                    placeholder="55.00"
                    placeholderTextColor={'#fff'}
                    keyboardType="number-pad"
                  />
                </View>
                <Text style={styles.symbolTxt}>€</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.verifyBtn}>
              <Text style={styles.outLabelTxt}>Verified</Text>
            </TouchableOpacity>

            <Button BtnName="OK" onPress={OkHandler} />
            <TouchableOpacity
              style={styles.BackBtn}
              onPress={() => navigation.navigate('Home')}>
              <Text style={[styles.backTxt, CustomFont.Roboto_Reg]}>
                Back to Home
              </Text>
            </TouchableOpacity>
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
  BGImage: {
    flex: 1,
    alignItems: 'center',
    width: windowWidth * 1,
  },
  LogoBG: {
    backgroundColor: '#FD5086',
    width: windowWidth * 1,
    height: windowHeight * 0.16,
    alignItems: 'center',
  },
  Logo: {
    top: 20,
  },

  FContainer: {
    backgroundColor: '#fff',
    width: windowWidth * 0.95,
    marginVertical: 10,
    alignItems: 'center',
    padding: 20,
  },

  InnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  labelTxt: {
    flex: 1,
    textAlign: 'left',
    color: '#000',
    fontSize: 14,
    marginBottom: 5,
  },
  picker: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },

  outLabelTxt: {
    flex: 2,
    color: '#fff',
  },

  symbolTxt: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
  },

  outerInput: {
    flex: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  verifyBtn: {
    backgroundColor: '#7EB900',
    width: windowWidth * 0.4,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  fittingBtn: {
    backgroundColor: '#FD5086',
    height: windowHeight * 0.07,
    width: windowWidth * 0.47,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  fittingBtnTxt: {
    color: '#fff',
  },

  AText: {
    fontSize: 21.96,
    color: '#fff',
    marginVertical: 10,
  },

  BackBtn: {
    marginTop: 30,
  },
  backTxt: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
