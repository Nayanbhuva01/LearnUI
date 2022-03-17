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
import {EllipseIcon, LockIcon, MailIcon, VectorIcon} from '../../assets/svgs';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Button from '../component/Button';
import Input from '../component/Input';
import BGComp from '../hoc/WithBackground';
import WithBackground from '../hoc/WithBackground';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Login({navigation}) {
  const [visiblePassword, setVisiblePassword] = useState(true);

  const [email, setEmail] = useState(null);
  const [passWord, setPassword] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(0);
  const [isValidPassword, setIsValidPassword] = useState(0);

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

  const handlePassword = () => {
    if (passWord) {
      if (passWord.length > 5) {
        setIsValidPassword(1);
      } else {
        setIsValidPassword(2);
      }
    } else {
      setIsValidPassword(0);
    }
  };

  const loginHandler = () => {
    if (isValidEmail === 0 || isValidPassword === 0) {
      ToastAndroid.showWithGravityAndOffset(
        'Please enter email and password',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        10,
        30,
      );
    } else if (isValidEmail === 2 || isValidPassword === 2) {
      ToastAndroid.showWithGravity(
        'Wrong E-Mail Format. Please enter valid E-mail.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      ToastAndroid.showWithGravity(
        'Success Login',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      navigation.replace('Home');
    }
  };

  const forgotPasswordHandler = () => {
    navigation.navigate('ForgotPassword');
  };

  const SignUpHandler = () => {
    navigation.navigate('SignUp');
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
          <EllipseIcon style={styles.Logo} />
          <Text style={styles.AccountLoginTxt}>Account Login</Text>

          <Input
            Icon={<MailIcon style={styles.emailIcon} />}
            placeholder="E-Mail address"
            keyboardType="email-address"
            onChangeText={value => {
              setEmail(value);
            }}
            onEndEditing={handleValidEmail}
            isValid={isValidEmail}
          />
          <Input
            Icon={<LockIcon style={styles.LockIcon} />}
            placeholder="Password"
            secureTextEntry={visiblePassword}
            endIcon={<VectorIcon style={styles.eye} />}
            onChangeText={value => {
              setPassword(value);
            }}
            onEndEditing={handlePassword}
            isValid={isValidPassword}
            onPressEye={() => setVisiblePassword(!visiblePassword)}
          />
          <TouchableOpacity
            style={styles.forgotBtn}
            onPress={forgotPasswordHandler}>
            <Text style={styles.ForgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Buttons}>
          <Button BtnName="Login" onPress={loginHandler} />

          <TouchableOpacity style={styles.SignUp} onPress={SignUpHandler}>
            <Text style={styles.TextA}>Don't have account?</Text>
            <Text style={styles.TextB}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
  Logo: {
    marginTop: 70,
    marginBottom: 30,
  },

  AccountLoginTxt: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 11,
  },

  emailIcon: {
    position: 'absolute',
    margin: 11,
  },
  LockIcon: {
    position: 'absolute',
    margin: 11,
  },
  eye: {
    position: 'absolute',
  },

  forgotBtn: {
    alignSelf: 'flex-end',
    right: 50,
    marginVertical: 5,
  },
  ForgotText: {
    textDecorationLine: 'underline',
    color: '#fff',
  },

  Buttons: {
    alignItems: 'center',
    marginBottom: 80,
  },

  SignUp: {
    flexDirection: 'row',
    marginTop: 7,
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
