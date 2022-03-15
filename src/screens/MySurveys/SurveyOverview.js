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
import React, {useState} from 'react';
import {EditIcon, LogoIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';
import Button from '../../component/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SurveyOverview({navigation}) {
  const BtnHandler = () => {
    navigation.goBack();
  };
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
              Survey Overview
            </Text>
            <View style={styles.FContainer}>
              <View style={styles.InnContainer}>
                <Image
                  style={{height: 100, width: 150}}
                  source={require('../../../assets/bathroom-led.png')}
                />
                <View style={{padding: 5}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Bol]}>
                      Fitting Name:
                    </Text>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Reg]}>
                      Test Fitting #1
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Bol]}>
                      Location:
                    </Text>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Reg]}>
                      Livingroom
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Bol]}>
                      Fitting Size:
                    </Text>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Reg]}>
                      1800 x 600 x 30
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Bol]}>
                      Quantity:
                    </Text>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Reg]}>
                      3pcs
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Bol]}>
                      Watts:
                    </Text>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Reg]}>
                      60W
                    </Text>
                  </View>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <TouchableOpacity>
                    <EditIcon />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{borderWidth: 1, width: windowWidth * 0.9, opacity: 0.1}}
              />
              <View
                style={{
                  width: windowWidth * 0.4,
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                <TouchableOpacity style={styles.verifyBtn}>
                  <Text style={[styles.verifyLabelTxt, CustomFont.Roboto_Reg]}>
                    Verified
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.FContainer}>
              <View style={styles.InnContainer}>
                <Text style={[styles.labelTxt, {flex: 1}]}>KWh Rate:</Text>
                <View style={[styles.inputContainer, {flex: 2}]}>
                  <TextInput
                    placeholder="€ 0.789551"
                    keyboardType="number-pad"
                  />
                </View>
                <View style={{flex: 1, marginHorizontal: 3}}>
                  <TouchableOpacity style={styles.verifyBtn}>
                    <Text
                      style={[styles.verifyLabelTxt, CustomFont.Roboto_Reg]}>
                      Verified
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.InnContainer}>
                <Text style={[styles.labelTxt, {flex: 1, fontSize: 12}]}>
                  Labour Cost:
                </Text>
                <View style={[styles.inputContainer, {flex: 2}]}>
                  <TextInput placeholder="€ 55.00" keyboardType="number-pad" />
                </View>
                <View style={{flex: 1, marginHorizontal: 3}}>
                  <TouchableOpacity style={styles.verifyBtn}>
                    <Text
                      style={[styles.verifyLabelTxt, CustomFont.Roboto_Reg]}>
                      Verified
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.InnContainer}>
                <Text style={[styles.labelTxt, {flex: 1}]}>
                  Accessories & Plan Cost:
                </Text>
                <View style={[styles.inputContainer, {flex: 2}]}>
                  <TextInput
                    placeholder="€ 1975.35"
                    keyboardType="number-pad"
                  />
                </View>
                <View style={{flex: 1, marginHorizontal: 3}}>
                  <TouchableOpacity style={styles.verifyBtn}>
                    <Text
                      style={[styles.verifyLabelTxt, CustomFont.Roboto_Reg]}>
                      Verified
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                width: windowWidth * 0.5,
                backgroundColor: '#7EB900',
                padding: 12,
                alignItems: 'center',
                marginTop: 7,
              }}>
              <Text style={styles.verifyLabelTxt}>Project Completed</Text>
            </View>

            <Button BtnName="Back to My Surveys" onPress={BtnHandler} />
            <TouchableOpacity
              style={styles.BackBtn}
              onPress={() => navigation.replace('DeleteSurvey')}>
              <Text style={[styles.backTxt, CustomFont.Roboto_Reg]}>
                Delete this Survey
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
    marginBottom: 5,
    alignItems: 'center',
    padding: 5,
    elevation: 10,
  },

  InnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  labelTxt: {
    textAlign: 'left',
    color: '#000',
    fontSize: 14,
  },
  verifyBtn: {
    backgroundColor: '#7EB900',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
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

  verifyLabelTxt: {
    color: '#fff',
    fontSize: 14,
  },

  inputContainer: {
    borderWidth: 1,
    backgroundColor: '#EEEEEE',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 3,
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
