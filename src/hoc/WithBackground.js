import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({children, ...props}) => (
  <SafeAreaView style={{flex: 1}}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require('../../assets/BG.png')}
        style={styles.bgImage}>
        {children}
        {/* </KeyboardAvoidingView> */}
      </ImageBackground>
    </TouchableWithoutFeedback>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignItems: 'center',
    width: windowWidth,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
