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
import WithBackground from '../../hoc/WithBackground';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DeleteSurvey({navigation}) {
  const YesHandler = () => {
    navigation.replace('DeleteAccSuccess');
  };

  return (
    <WithBackground>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.subContainer}>
          <View style={styles.LogoContainer}>
            <EllipseIcon style={styles.Logo} />
          </View>
          <View style={styles.middContainer}>
            <Text style={[styles.DeleteFittingTxt, CustomFont.Roboto_Bol]}>
              DELETE ACCOUNT
            </Text>
            <View style={styles.messageContainer}>
              <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                Are you sure you want to delete account? All your data will be
                templorary lost?
              </Text>
            </View>
          </View>

          <Button
            btnStyle={{marginTop: 20}}
            BtnName="Yes"
            onPress={YesHandler}
          />
          <Button
            BtnName="No"
            btnStyle={{marginTop: 10, marginBottom: 100}}
            onPress={() => navigation.goBack()}
          />
        </View>
      </ScrollView>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    alignItems: 'center',
    width: windowWidth * 1,
    height: windowHeight * 1,
  },
  LogoContainer: {
    marginTop: 30,
    marginBottom: 30,
  },

  middContainer: {
    alignItems: 'center',
  },
  DeleteFittingTxt: {
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

  Input: {
    marginBottom: 100,
  },

  Buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    // top: 90,
  },

  BackBtn: {
    marginTop: 80,
  },
  BackTxt: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
