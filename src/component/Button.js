import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Text,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Button = props => {
  const {onPress, BtnName, btnStyle = {}} = props;
  return (
    <View>
      <TouchableOpacity style={[styles.Login, btnStyle]} onPress={onPress}>
        <Text style={styles.ResetPasswordTxt}>{BtnName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Login: {
    borderRadius: 50,
    backgroundColor: '#FD5086',
    paddingTop: 20,
    paddingBottom: 20,
    width: windowWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  ResetPasswordTxt: {
    color: '#fff',
    fontSize: 20,
  },
});
