import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../../component/Button';
import {CameraIcon, EllipseIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';
import WithBackground from '../../hoc/WithBackground';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function S7Picture({navigation}) {
  const [isVisibleImage, setIsVisibleImage] = useState(false);
  const [cameraBtn, setCameraBtn] = useState(true);
  const onCameraHandler = () => {};

  function NextHandler() {
    navigation.navigate('EmergencyFitting');
  }

  return (
    <WithBackground>
      <View style={styles.subContainer}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View style={styles.LogoContainer}>
            <EllipseIcon style={styles.Logo} />
          </View>
          <View style={styles.middContainer}>
            <Text style={[styles.CongratulationTxt, CustomFont.Roboto_Bol]}>
              Step 7. Picture
            </Text>
            <View style={styles.messageContainer}>
              <Text style={[styles.messageTxt, CustomFont.Roboto_Reg]}>
                Please take a picture of your Fitting.
              </Text>
            </View>
          </View>

          <View style={styles.InpContainer}>
            <View style={styles.Input}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                {isVisibleImage === true ? (
                  <Image source={require('../../../assets/image.png')} />
                ) : null}
                <TouchableOpacity
                  style={{position: 'absolute'}}
                  onPress={() => {
                    setCameraBtn(!cameraBtn);
                    if (cameraBtn) {
                      setIsVisibleImage(true);
                    }
                    // else {
                    //   setIsVisibleImage(false);
                    // }
                  }}>
                  <CameraIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Buttons}>
          <Button BtnName="Next" onPress={NextHandler} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={[
                {
                  color: '#fff',
                  textDecorationLine: 'underline',
                  marginTop: 10,
                },
                CustomFont.Roboto_Reg,
              ]}>
              Back
            </Text>
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
    marginBottom: 20,
  },
  CongratulationTxt: {
    color: '#fff',
    fontSize: 25,
  },

  messageContainer: {
    width: windowWidth * 0.8,
    alignItems: 'center',
  },
  messageTxt: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

  InpContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    alignItems: 'center',
    marginBottom: 5,
  },
  Input: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    flex: 1,
  },
  Buttons: {
    alignItems: 'center',
    marginBottom: 10,
  },
});
