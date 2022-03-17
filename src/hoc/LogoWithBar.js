import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {LogoIcon} from '../../assets/svgs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default ({Children, ...props}) => (
  <View style={styles.LogoBG}>
    <LogoIcon style={styles.Logo} />
  </View>
);

const styles = StyleSheet.create({
  LogoBG: {
    backgroundColor: '#FD5086',
    width: windowWidth * 1,
    height: 130,
    alignItems: 'center',
  },
  Logo: {
    top: 20,
  },
});
