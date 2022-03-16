import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {LogoIcon} from '../../../assets/svgs';
import CustomFont from '../../utils/CustomFont';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DialuxDesign({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/BG.png')}
        style={styles.BGImage}>
        <View style={styles.LogoBG}>
          <LogoIcon style={styles.Logo} />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.FContainer}>
              <Text style={[styles.AText, CustomFont.Roboto_Bol]}>
                Dialux Design
              </Text>
              <View style={styles.BoxContainer}>
                <ScrollView>
                  <Text style={[styles.DataTxt, CustomFont.Roboto_Reg]}>
                    We can assist architects, designers, planners and property
                    owners alike in realising their project requirements, from
                    concept stage all the way through to the installation stage.
                  </Text>
                  <Text style={[styles.DataTxt, CustomFont.Roboto_Reg]}>
                    {'  '}
                    Using the best our vast lighting sources we can achieve the
                    desired lighting effects within the constraints of a given
                    application.
                  </Text>
                  <Text style={[styles.DataTxt, CustomFont.Roboto_Reg]}>
                    With the use of AutoCAD drafting and Dialux, our team of
                    lighting engineers and designers will come up with the
                    lighting levels require, lighting fixtures as per spec and a
                    design that will suite the requirements of the customer.
                  </Text>
                </ScrollView>
              </View>
            </View>
            <Button
              BtnName="Contact us"
              btnStyle={{marginTop: 10}}
              onPress={() => navigation.navigate('ContactUs')}
            />
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              style={styles.BackBtn}
              onPress={() => navigation.navigate('Home')}>
              <Text style={[styles.backTxt, CustomFont.Roboto_Reg]}>
                Back to Home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  BGImage: {
    flex: 1,
    alignItems: 'center',
    width: windowWidth * 1,
  },
  LogoBG: {
    backgroundColor: '#FD5086',
    width: windowWidth * 1,
    height: windowHeight * 0.16,
    alignItems: 'center',
  },
  Logo: {
    top: 20,
  },

  FContainer: {
    backgroundColor: '#fff',
    width: windowWidth * 0.95,
    marginVertical: 10,
    alignItems: 'center',
    padding: 20,
    elevation: 5,
  },

  BoxContainer: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.3,
  },
  labelTxt: {
    color: '#000',
    fontSize: 14,
  },
  AText: {
    fontSize: 21.96,
    color: '#000',
    marginBottom: 10,
  },
  DataTxt: {
    textAlign: 'left',
  },
  backTxt: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
