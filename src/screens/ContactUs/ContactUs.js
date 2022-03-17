import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {LogoIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';
import WithBackground from '../../hoc/WithBackground';
import LogoWithBar from '../../hoc/LogoWithBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ContactUs({navigation}) {
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
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={styles.FContainer}>
          <Text style={[styles.AText, CustomFont.Roboto_Bol]}>Contact us</Text>
            <View style={styles.BoxContainer}>
              <View style={styles.InnerContainer}>
                <Text style={{flex: 2, color: '#000'}}>First name:</Text>
                <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                  <TextInput placeholder="Enter Your First name" />
                </View>
              </View>
              <View style={styles.InnerContainer}>
                <Text style={{flex: 2, color: '#000'}}>Company:</Text>
                <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                  <TextInput placeholder="Enter Your Company name" />
                </View>
              </View>
              <View style={styles.InnerContainer}>
                <Text style={{flex: 2, color: '#000'}}>E-Mail:</Text>
                <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                  <TextInput
                    keyboardType="email-address"
                    placeholder="Enter Your E-Mail address"
                  />
                </View>
              </View>
              <View style={styles.InnerContainer}>
                <Text style={{flex: 2, color: '#000'}}>Phone:</Text>
                <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                  <TextInput
                    keyboardType="phone-pad"
                    placeholder="Enter Your Phone Number"
                  />
                </View>
              </View>
              <View style={styles.InnerContainer}>
                <Text style={{flex: 2, color: '#000'}}>Message:</Text>
                <View style={{flex: 3, backgroundColor: '#EEEEEE'}}>
                  <TextInput
                    multiline={true}
                    placeholder="Please type your message here"
                  />
                </View>
              </View>
              <Button
                BtnName="Send"
                onPress={() => navigation.navigate('SendContactUsSuccess')}
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
    marginBottom: 10,
  },

  backTxt: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
