import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {LockIcon, RightIcon, VectorIcon, WrongIcon} from '../../assets/svgs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Input = props => {
  const {
    Icon,
    placeholder,
    secureTextEntry,
    onEndEditing,
    onChangeText,
    onPressEye,
    endIcon,
    keyboardType,
    isValid = 0,
    inputStyle = {},
  } = props;
  return (
    <View>
      <View style={styles.passwordInputContainer}>
        <View style={styles.PassWord}>
          {Icon}
          <View style={[styles.PassWordInput, inputStyle]}>
            <TextInput
              style={styles.textInputPassword}
              placeholder={placeholder}
              placeholderTextColor="#fff"
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              onChangeText={onChangeText}
              onEndEditing={onEndEditing}
            />
            <TouchableOpacity style={styles.eyeBtn} onPress={onPressEye}>
              {endIcon}
            </TouchableOpacity>
          </View>
        </View>
        {isValid === 0 ? null : isValid === 1 ? (
          <RightIcon style={styles.passRightIcon} />
        ) : (
          <WrongIcon style={styles.passWrongIcon} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordInputContainer: {
    width: windowWidth * 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PassWord: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  PassWordInput: {
    flexDirection: 'row',
    borderWidth: 1,
    width: windowWidth * 0.8,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputPassword: {
    width: windowWidth * 0.65,
    color: '#fff',
  },
  LockIcon: {
    position: 'absolute',
    margin: 11,
  },
  eyeBtn: {
    justifyContent: 'center',
  },
  eye: {
    position: 'absolute',
  },
  passWrongIcon: {
    position: 'absolute',
    right: 11,
  },
  passRightIcon: {
    position: 'absolute',
    right: 11,
  },
});
