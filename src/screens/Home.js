import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  BlockIcon,
  CalcIcon,
  ContectIcon,
  CreateSurvey,
  DialuxIcon,
  LogoIcon,
  MySurveyIcon,
  UserIcon,
  UserPinkIcon,
} from '../../assets/svgs';
import CustomFont from '../utils/CustomFont';
import Button from '../component/Button';
import {CommonActions} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({navigation}) {
  const MySurveyHandler = () => {
    navigation.navigate('MySurveys');
  };

  const MyAccountHandler = () => {
    navigation.navigate('MyAccount');
  };

  const ContactHandler = () => {
    navigation.navigate('ContactUs');
  };

  const CalcCarbonHandler = () => {
    navigation.navigate('CalculateCarbonCredit');
  };

  const DialuxHandler = () => {
    navigation.navigate('DialuxDesign');
  };

  const LogOutHandler = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Login'}],
      }),
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/BG.png')}
        style={styles.BGImage}>
        <View style={styles.LogoBG}>
          <LogoIcon style={styles.Logo} />
          <View style={styles.BlockBG}>
            <BlockIcon style={styles.BlockIcon} />
          </View>
        </View>
        <View style={styles.FContainer}>
          <Text style={[styles.AText, CustomFont.Roboto_Bol]}>Welcome</Text>
          <Text style={[styles.BText, CustomFont.Roboto_Reg]}>
            Petar’s Lighting Solutions
          </Text>
          <View style={styles.surveys}>
            <TouchableOpacity
              style={styles.CreateSurvey}
              onPress={() => {
                navigation.navigate('CreateSurvey');
              }}>
              <CreateSurvey />
              <Text style={[styles.CreateSurText, CustomFont.Roboto_Bol]}>
                Create Survey
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MySurvey} onPress={MySurveyHandler}>
              <MySurveyIcon />
              <Text style={[styles.MySurText, CustomFont.Roboto_Bol]}>
                My Surveys
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.SContainer}>
          <View style={styles.Options}>
            <TouchableOpacity
              style={styles.CalculateBtn}
              onPress={CalcCarbonHandler}>
              <CalcIcon />
              <Text style={[styles.CalculateTxt, CustomFont.Roboto_Reg]}>
                Calculate Carbon Credit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.DialuxBtn} onPress={DialuxHandler}>
              <DialuxIcon />
              <Text style={[styles.DialuxTxt, CustomFont.Roboto_Reg]}>
                Dialux Design
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Options}>
            <TouchableOpacity
              style={styles.MyAccBtn}
              onPress={MyAccountHandler}>
              <UserPinkIcon />
              <Text style={[styles.MyAccTxt, CustomFont.Roboto_Reg]}>
                My Account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ContactBtn}
              onPress={ContactHandler}>
              <ContectIcon />
              <Text style={[styles.ContectTxt, CustomFont.Roboto_Reg]}>
                Contact Us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button BtnName="Log Out" onPress={LogOutHandler} />
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

  BlockIcon: {
    right: '45%',
  },

  FContainer: {
    backgroundColor: '#fff',
    width: windowWidth * 0.95,
    height: windowHeight * 0.26,
    marginVertical: 10,
    alignItems: 'center',
    padding: 8,
  },
  AText: {
    fontSize: 21.96,
    color: '#000',
  },
  BText: {
    fontSize: 17,
    color: '#000',
  },
  surveys: {
    marginTop: 30,
    flexDirection: 'row',
    width: '100%',
    height: 70,
    justifyContent: 'center',
  },
  CreateSurvey: {
    alignItems: 'center',
    width: '40%',
  },
  MySurvey: {
    width: '40%',
    alignItems: 'center',
  },
  CreateSurText: {
    marginTop: 7,
    color: '#000',
    fontSize: 16.8,
  },
  MySurText: {
    marginTop: 7,
    color: '#000',
    fontSize: 16.8,
  },

  SContainer: {
    backgroundColor: '#fff',
    width: windowWidth * 0.95,
    height: windowHeight * 0.32,
    alignItems: 'center',
    padding: 8,
  },
  Options: {
    marginTop: 30,
    flexDirection: 'row',
    width: '100%',
    height: 70,
    justifyContent: 'center',
  },
  CalculateBtn: {
    alignItems: 'center',
    width: '30%',
    right: 10,
  },
  DialuxBtn: {
    width: '30%',
    alignItems: 'center',
    left: 20,
  },
  MyAccBtn: {
    alignItems: 'center',
    width: '30%',
    right: 10,
  },
  ContactBtn: {
    width: '30%',
    alignItems: 'center',
    left: 20,
  },
  CalculateTxt: {
    textAlign: 'center',
    marginTop: 7,
    color: '#000',
    fontSize: 13,
  },
  DialuxTxt: {
    marginTop: 7,
    color: '#000',
    fontSize: 13,
  },
  MyAccTxt: {
    marginTop: 7,
    color: '#000',
    fontSize: 13,
  },
  ContectTxt: {
    marginTop: 7,
    color: '#000',
    fontSize: 13,
  },
});
