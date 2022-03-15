import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {
  EllipseIcon,
  LockIcon,
  VectorIcon,
} from '../../assets/svgs';
import Button from '../component/Button';
import Input from '../component/Input';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function NewPasswordCreate({navigation}) {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [visibleConfPassword, setVisibleConfPassword] = useState(true);

  const [passWord, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const ChangePassHandler = () => {
    if (passWord.length > 5 && confPassword.length > 5) {
      if (passWord == confPassword) {
        ToastAndroid.showWithGravityAndOffset(
          'Password Changed Successfully',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          10,
          50,
        );
        navigation.navigate('Login');
      } else {
        ToastAndroid.showWithGravityAndOffset(
          `Confirm Password doesn't Match`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          10,
          50,
        );
      }
    } else {
      ToastAndroid.showWithGravityAndOffset(
        `Password Must be Six Character long`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        10,
        50,
      );
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/BG.png')}
        style={styles.bgImage}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <EllipseIcon style={styles.Logo} />
            <Text style={styles.ResetPassTxt}>Reset Password</Text>

            <Input
              Icon={<LockIcon style={styles.LockIcon} />}
              placeholder="New Password"
              endIcon={<VectorIcon style={styles.eyeCon} />}
              secureTextEntry={visiblePassword}
              onChangeText={value => setPassword(value)}
              onPressEye={() => setVisiblePassword(!visiblePassword)}
            />

            <Input
              Icon={<LockIcon style={styles.LockIcon} />}
              placeholder="Repeat Password"
              endIcon={<VectorIcon style={styles.eyeCon} />}
              secureTextEntry={visibleConfPassword}
              onChangeText={value => setConfPassword(value)}
              onPressEye={() => setVisibleConfPassword(!visibleConfPassword)}
            />
            <View style={styles.button}>
              <Button BtnName="Change Password" onPress={ChangePassHandler} />
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

  Logo: {},

  ResetPassTxt: {
    color: '#fff',
    fontSize: 20,
    marginTop: 36,
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
  eyeCon: {
    position: 'absolute',
  },

  button: {
    marginVertical: 40,
  },
});
