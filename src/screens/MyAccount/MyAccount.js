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
import {LogoIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';
import WithBackground from '../../hoc/WithBackground';
import LogoWithBar from '../../hoc/LogoWithBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MySurveys({navigation}) {
  const newFittingHandler = () => {
    navigation.navigate('NewFittingWizard');
  };

  const DeleteAccHandler = () => {
    navigation.navigate('DeleteAccount');
  };
  return (
    <WithBackground>
      <LogoWithBar />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.FContainer}>
          <Text style={[styles.AText, CustomFont.Roboto_Bol]}>My Account</Text>
          <View style={styles.BoxContainer}>
            <View style={styles.InnerContainer}>
              <Text style={{flex: 2, color: '#000'}}>Company Name:</Text>
              <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                <TextInput>
                  <Text>Petar’s Lighting Solutions</Text>
                </TextInput>
              </View>
            </View>
            <View style={styles.InnerContainer}>
              <Text style={{flex: 2, color: '#000'}}>Address:</Text>
              <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                <TextInput multiline={true}>
                  <Text>49a Kilsheelan Clonmel, Clonmel</Text>
                </TextInput>
              </View>
            </View>
            <View style={styles.InnerContainer}>
              <Text style={{flex: 2, color: '#000'}}>E-Mail:</Text>
              <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                <TextInput keyboardType="email-address">
                  <Text>petar3@gmail.com</Text>
                </TextInput>
              </View>
            </View>
            <View style={styles.InnerContainer}>
              <Text style={{flex: 2, color: '#000'}}>Phone:</Text>
              <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                <TextInput keyboardType="phone-pad">
                  <Text>+353 78 1984 983</Text>
                </TextInput>
              </View>
            </View>
            <View style={styles.InnerContainer}>
              <Text style={{flex: 2, color: '#000'}}>Old Password:</Text>
              <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                <TextInput secureTextEntry={true}>
                  <Text></Text>
                </TextInput>
              </View>
            </View>
            <View style={styles.InnerContainer}>
              <Text style={{flex: 2, color: '#000'}}>New Password:</Text>
              <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                <TextInput secureTextEntry={true}>
                  <Text></Text>
                </TextInput>
              </View>
            </View>
            <View style={styles.DeleteAccContainer}>
              <TouchableOpacity onPress={DeleteAccHandler}>
                <Text style={{color: 'red'}}>Delete Account</Text>
              </TouchableOpacity>
            </View>
            <Button
              BtnName="Save"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>

        <View style={styles.Buttons}>
          <TouchableOpacity
            style={styles.BackBtn}
            onPress={() => navigation.navigate('Home')}>
            <Text style={[styles.backTxt, CustomFont.Roboto_Reg]}>
              Back to Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
  FContainer: {
    backgroundColor: '#fff',
    width: windowWidth * 0.95,
    marginVertical: 10,
    alignItems: 'center',
    padding: 20,
  },

  BoxContainer: {
    width: windowWidth * 0.8,
    alignItems: 'center',
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

  DeleteAccContainer: {
    width: windowWidth * 0.8,
    alignItems: 'flex-end',
  },

  Buttons: {
    alignItems: 'center',
    marginBottom: 20,
  },

  backTxt: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
