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
import WithBackground from '../hoc/WithBackground';

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
    <WithBackground>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center'}}>
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
        </View>
        <View style={styles.buttons}>
          <Button BtnName="Next" onPress={NextHandler} />

          <TouchableOpacity style={styles.Login} onPress={SignInHandler}>
            <Text style={styles.TextA}>Already have account?</Text>
            <Text style={styles.TextB}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
  LogoContainer: {
    marginTop: 30,
    marginBottom: 30,
  },

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

  buttons: {
    alignItems: 'center',
    marginBottom: 20,
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
