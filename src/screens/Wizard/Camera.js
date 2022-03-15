import React from 'react';
import {View, StyleSheet} from 'react-native';
import { useCameraDevices } from 'react-native-vision-camera';

const Camera = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) return <LoadingView />;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};


export default Camera;
