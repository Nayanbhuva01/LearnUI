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
import Button from '../../component/Button';
import {EllipseIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';
import Input from '../../component/Input';
import WithBackground from '../../hoc/WithBackground';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FittingSuccess({navigation}) {
  const BtnHandler = () => {
    navigation.navigate('SavedFittings');
  };
  const CreateBtnHandler = () => {
    navigation.navigate('NewFittingWizard');
  };

  return (
    <WithBackground>
      <View style={styles.subContainer}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.LogoContainer}>
            <EllipseIcon style={styles.Logo} />
          </View>
          <View style={styles.middContainer}>
            <Text style={[styles.CongratulationTxt, CustomFont.Roboto_Bol]}>
              CONGRATULATION!
            </Text>
            <View style={styles.messageContainer}>
              <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                Your fitting has been successfully Created.
              </Text>
            </View>
          </View>

          <Button
            btnStyle={{marginTop: 20}}
            BtnName="Create another Fitting"
            onPress={CreateBtnHandler}
          />
          <Button
            BtnName="Continue Survey"
            btnStyle={{marginTop: 10, marginBottom: 100}}
            onPress={BtnHandler}
          />
        </View>

        <View style={styles.Buttons}>
          <TouchableOpacity
            style={styles.BackBtn}
            onPress={() => navigation.goBack()}>
            <Text style={[styles.BackTxt, CustomFont.Roboto_Reg]}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LogoContainer: {
    marginTop: 30,
    marginBottom: 30,
  },

  middContainer: {
    alignItems: 'center',
  },
  CongratulationTxt: {
    color: '#fff',
    fontSize: 25,
  },

  messageContainer: {
    width: windowWidth * 0.8,
    alignItems: 'center',
    marginBottom: 20,
  },
  messageTxt: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  Buttons: {
    alignItems: 'center',
    marginBottom: 10,
  },

  BackBtn: {
    marginTop: 80,
  },
  BackTxt: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
