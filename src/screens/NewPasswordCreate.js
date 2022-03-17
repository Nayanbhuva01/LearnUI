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
import {EllipseIcon, LockIcon, VectorIcon} from '../../assets/svgs';
import Button from '../component/Button';
import Input from '../component/Input';
import WithBackground from '../hoc/WithBackground';

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
    <WithBackground>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center'}}>
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
        </View>
        <View style={styles.button}>
          <Button BtnName="Change Password" onPress={ChangePassHandler} />
        </View>
      </View>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
  ResetPassTxt: {
    color: '#fff',
    fontSize: 20,
    marginTop: 36,
    marginBottom: 11,
  },

  Logo: {
    marginTop: 50,
    marginBottom: 30,
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
    alignItems: 'center',
    marginBottom: 80,
  },
});
