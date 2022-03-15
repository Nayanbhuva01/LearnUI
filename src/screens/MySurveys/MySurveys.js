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
} from 'react-native';
import React, {useState} from 'react';
import {
  BlockIcon,
  EditIcon,
  LogoIcon,
  RightIcon,
  SmileIcon,
  WrongIcon,
} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MySurveys({navigation}) {
  const newFittingHandler = () => {
    navigation.navigate('NewFittingWizard');
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
            <View style={styles.FContainer}>
              <Text style={[styles.AText, CustomFont.Roboto_Bol]}>
                My Surveys
              </Text>
              <View style={styles.InnContainer}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SurveyOverview');
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#F0F0F0',
                      width: windowWidth * 0.93,
                      padding: 11,
                    }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Text style={[styles.labelTxt, CustomFont.Roboto_Bol]}>
                        Test Fitting #1
                      </Text>
                      <Text style={styles.labelTxt}> (9/7/2019 3:51 PM)</Text>
                    </View>
                    <Text style={[styles.labelTxt, CustomFont.Roboto_Bol]}>
                      1 Fitting
                    </Text>
                  </View>
                </TouchableOpacity>

                <SmileIcon style={styles.SmileIcon} />
                <Text style={styles.OopsMsg}>
                  You can always Create More Fittings, just click the button
                  below.
                </Text>
                <TouchableOpacity
                  style={styles.fittingBtn}
                  onPress={newFittingHandler}>
                  <Text style={styles.fittingBtnTxt}>Create New Fitting</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    height: windowHeight * 0.73,
    marginVertical: 10,
    alignItems: 'center',
    padding: 20,
  },

  InnContainer: {
    width: windowWidth * 0.65,
    alignItems: 'center',
    padding: 10,
  },
  labelTxt: {
    color: '#000',
    fontSize: 14,
  },
  SmileIcon: {
    marginVertical: 7,
  },
  OopsMsg: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5,
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
    color: '#000',
    marginBottom: 10,
  },

  BackBtn: {
    marginTop: 30,
  },
  backTxt: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  CompleteBtn: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.08,
    width: windowWidth * 0.8,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    // opacity: 0.1,
  },
  CompleteBtnB: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.08,
    width: windowWidth * 0.8,
    borderRadius: 50,
    backgroundColor: '#FD5086',
    // opacity: 0.1,
  },
  completeBtnTxt: {
    fontSize: 20,
    color: '#fff',
    // opacity: 0.4,
  },
});
