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
import {
  AddressIcon,
  CallIcon,
  CompanyIcon,
  EllipseIcon,
  PhoneIcon,
  UserIcon,
} from '../../assets/svgs';
import Button from '../component/Button';
import Input from '../component/Input';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignUp({navigation}) {
  const NextHandler = () => {
    navigation.navigate('AccountRegistration');
  };

  const SignInHandler = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.bgImage}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 30,
          }}>
          <EllipseIcon style={styles.LogoContainer} />

          <View style={styles.middContainer}>
            <Text style={styles.CompanyRegistrationTxt}>
              Company Registration
            </Text>

            <Input
              Icon={<UserIcon style={styles.userIcon} />}
              placeholder="First and Last Name"
            />

            <Input
              Icon={<CompanyIcon style={styles.userIcon} />}
              placeholder="Company Name"
            />

            <Input
              Icon={<AddressIcon style={styles.userIcon} />}
              placeholder="Company Address"
            />

            <Input
              Icon={<CallIcon style={styles.userIcon} />}
              placeholder=" Office Number"
              keyboardType="phone-pad"
            />

            <Input
              Icon={<PhoneIcon style={styles.userIcon} />}
              placeholder="MOB Number"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.buttons}>
            <Button BtnName="Next" onPress={NextHandler} />

            <TouchableOpacity style={styles.Login} onPress={SignInHandler}>
              <Text style={styles.TextA}>Already have account?</Text>
              <Text style={styles.TextB}> Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </ImageBackground>
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
    width: windowWidth * 1,
  },

  //Logo
  LogoContainer: {
    marginBottom: 30,
    marginTop: 20,
  },

  //Company Registration
  middContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  CompanyRegistrationTxt: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 11,
  },

  userIcon: {
    position: 'absolute',
    margin: 11,
  },

  //Button
  buttons: {
    marginTop: 40,
    alignItems: 'center',
  },
  Login: {
    flexDirection: 'row',
    marginTop: 7,
    right: 13,
  },
  TextA: {
    fontSize: 13,
    color: '#fff',
  },
  TextB: {
    color: '#fff',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});
