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
} from '../../assets/svgs';
import CustomFont from '../utils/CustomFont';
import WithBackground from '../hoc/WithBackground';
import LogoWithBar from '../hoc/LogoWithBar';
import Button from '../component/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SavedFittings({navigation}) {
  const newFittingHandler = () => {
    navigation.navigate('NewFittingWizard');
  };

  const CompleteHandler = () => {
    navigation.navigate('CompleteSurveyVerify');
  };
  return (
    <WithBackground>
      <LogoWithBar />
      <View style={styles.FContainer}>
        <Text style={[styles.AText, CustomFont.Roboto_Bol]}>
          Saved Fittings
        </Text>
        <View style={styles.InnContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F0F0F0',
              width: windowWidth * 0.93,
              padding: 11,
            }}>
            <View style={{flex: 1}}>
              <Text style={[styles.labelTxt, CustomFont.Roboto_Bol]}>
                Test Fitting #1
              </Text>
              <Text style={styles.labelTxt}>(1800mm x 600mm x 30mm)</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditFitting');
              }}>
              <EditIcon />
            </TouchableOpacity>
          </View>
          <SmileIcon style={styles.SmileIcon} />
          <Text style={styles.OopsMsg}>
            You can always Create More Fittings, just click the button below.
          </Text>
          <TouchableOpacity
            style={styles.fittingBtn}
            onPress={newFittingHandler}>
            <Text style={styles.fittingBtnTxt}>Create New Fitting</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button BtnName="Complete Survey" onPress={CompleteHandler} />
      <TouchableOpacity
        style={styles.BackBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.backTxt, CustomFont.Roboto_Reg]}>
          Back to Home
        </Text>
      </TouchableOpacity>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
  FContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: windowWidth * 0.95,
    height: windowHeight - 330,
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
    marginBottom: 10,
  },
  backTxt: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
