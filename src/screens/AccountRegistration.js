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
  EllipseIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  VectorIcon,
} from '../../assets/svgs';
// import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import CheckBox from '@react-native-community/checkbox';
import Button from '../component/Button';
import Input from '../component/Input';
import WithBackground from '../hoc/WithBackground';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AccountRegistration({navigation}) {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [visibleConfPassword, setVisibleConfPassword] = useState(true);

  const [passWord, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  const RegisterAccHandler = () => {
    navigation.navigate('RegistrationSuccess');
  };

  const loginHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <WithBackground>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <EllipseIcon style={styles.LogoContainer} />
          <View style={styles.middContainer}>
            <Text style={styles.CompanyRegistrationTxt}>
              Account Registration
            </Text>

            <Input
              Icon={<UserIcon style={styles.userIcon} />}
              placeholder="Username"
            />

            <Input
              Icon={<MailIcon style={styles.userIcon} />}
              placeholder="E-Mail"
            />

            <Input
              Icon={<LockIcon style={styles.userIcon} />}
              placeholder="New Password"
              secureTextEntry={visiblePassword}
              endIcon={<VectorIcon style={styles.eyeCon} />}
              onChangeText={value => setPassword(value)}
              onPressEye={() => setVisiblePassword(!visiblePassword)}
            />

            <Input
              Icon={<LockIcon style={styles.userIcon} />}
              placeholder="Repeat Password"
              secureTextEntry={visibleConfPassword}
              endIcon={<VectorIcon style={styles.eyeCon} />}
              onChangeText={value => setConfPassword(value)}
              onPressEye={() => setVisibleConfPassword(!visibleConfPassword)}
            />

            <View style={styles.CheckBoxContainer}>
              <CheckBox
                disabled={false}
                value={isChecked}
                onValueChange={value => setIsChecked(value)}
                tintColors={{true: '#FD5086', false: '#fff'}}
              />
              <TouchableOpacity>
                <Text style={styles.TandCTxt}>I accept Terms & Conditions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button BtnName="Register Account" onPress={RegisterAccHandler} />

          <TouchableOpacity style={styles.LogIn} onPress={loginHandler}>
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

  eyeCon: {
    position: 'absolute',
  },

  CheckBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth * 0.8,
  },
  TandCTxt: {
    fontSize: 14,
    color: '#fff',
  },

  buttons: {
    alignItems: 'center',
    marginBottom: 10,
  },

  LogIn: {
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
