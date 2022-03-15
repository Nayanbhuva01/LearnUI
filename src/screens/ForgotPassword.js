import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {
  EllipseIcon,
  MailIcon,
} from '../../assets/svgs';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import SignUp from './SignUp';
import Button from '../component/Button';
import Input from '../component/Input';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(0);

  const checkEmail = () => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

  const handleValidEmail = () => {
    if (email) {
      if (checkEmail()) {
        setIsValidEmail(1);
      } else {
        setIsValidEmail(2);
      }
    } else {
      setIsValidEmail(0);
    }
  };

  const resetPasswordHandler = () => {
    if (email) {
      if (isValidEmail == true) {
        navigation.navigate('messageSentForgotPass');
      } else {
        ToastAndroid.showWithGravityAndOffset(
          'Please Enter Valid Email',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          10,
          50,
        );
      }
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Please Enter Email',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        10,
        50,
      );
    }
  };

  const SignUpHandler = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/BG.png')}
        style={styles.bgImage}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.LogoContainer}>
              <EllipseIcon style={styles.Logo} />
            </View>
            <View style={styles.middContainer}>
              <Text style={styles.ForgotPasswordTxt}>ForgotPassword</Text>

              <Input
                Icon={<MailIcon style={styles.emailIcon} />}
                placeholder="E-Mail address"
                keyboardType="email-address"
                onChangeText={value => setEmail(value)}
                onEndEditing={handleValidEmail}
                isValid={isValidEmail}
              />
            </View>
            <View style={styles.buttons}>
              <Button BtnName="Reset Password" onPress={resetPasswordHandler} />

              <TouchableOpacity style={styles.SignUp} onPress={SignUpHandler}>
                <Text style={styles.TextA}>Don't have account?</Text>
                <Text style={styles.TextB}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
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
  bgImage: {
    flex: 1,
    alignItems: 'center',
    width: windowWidth * 1,
  },
  LogoContainer: {
    marginBottom: 30,
  },

  middContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  ForgotPasswordTxt: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 11,
  },

  emailIcon: {
    position: 'absolute',
    margin: 11,
  },

  buttons: {
    marginTop: '20%',
    alignItems: 'center',
  },

  SignUp: {
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
