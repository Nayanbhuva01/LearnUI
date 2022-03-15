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
                My Account
              </Text>
              <View style={styles.BoxContainer}>
                <View style={styles.InnerContainer}>
                  <Text style={{flex: 2, color: '#000'}}>Company Name:</Text>
                  <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                    <TextInput>
                      <Text>Petar’s Lighting Solutions</Text>
                    </TextInput>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Text style={{flex: 2, color: '#000'}}>Company Name:</Text>
                  <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                    <TextInput>
                      <Text>Petar’s Lighting Solutions</Text>
                    </TextInput>
                  </View>
                </View>
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

  BoxContainer: {
    width: windowWidth * 0.8,
    alignItems: 'center',
    padding: 10,
  },
  labelTxt: {
    color: '#000',
    fontSize: 14,
  },
  AText: {
    fontSize: 21.96,
    color: '#000',
    marginBottom: 10,
  },

  InnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});
