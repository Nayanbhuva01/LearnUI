import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../../component/Button';
import {CameraIcon, EllipseIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function S7Picture({navigation}) {
  const [isVisibleImage, setIsVisibleImage] = useState(false);
  const [cameraBtn, setCameraBtn] = useState(true);
  //   const devices = useCameraDevices('wide-angle-camera');
  //   const device = devices.back;
  //   const [showCamera, setShowCamera] = useState(false);

  //   useEffect(() => {
  //     checkCameraPermission();
  //   }, []);

  //   const checkCameraPermission = async () => {
  //     try {
  //       permission = await Camera.requestCameraPermission();
  //       return permission;
  //     } catch (error) {
  //       console.log('=========error===', error);
  //     }

  //     return false;
  //   };

  //   const onCameraPress = () => {
  //     console.log('===========device===', device);
  //     if (device) {
  //       setShowCamera(true);
  //     }
  //   };

  const onCameraHandler = () => {};

  function NextHandler() {
    navigation.navigate('EmergencyFitting');
  }

  return (
    <ImageBackground
      source={require('../../../assets/BG.png')}
      style={styles.bgImage}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={{marginTop: 20, width: windowWidth * 1}}>
          <View style={styles.subContainer}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30%',
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
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </ImageBackground>

    /* {showCamera ? (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      ) : null} */
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 1,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  LogoContainer: {
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
    // flex: 1,
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
    justifyContent: 'center',
  },
});
