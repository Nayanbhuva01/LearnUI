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
import WithBackground from '../../hoc/WithBackground';
import LogoWithBar from '../../hoc/LogoWithBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CalculateCarbonCredit({navigation}) {
  return (
    <WithBackground>
      <LogoWithBar />
      <View
        style={{
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.FContainer}>
            <Text style={[styles.AText, CustomFont.Roboto_Bol]}>
              Calculate Carbon Credit
            </Text>
            <View style={styles.BoxContainer}>
              <ScrollView>
                <Text style={styles.DataTxt}>What are carbon credits?</Text>
                <Text style={styles.DataTxt}>
                  They are a credit that local governments give towards energy
                  saving projects that help reduce Co2 emissions. They can from
                  time to time and are subject to certain qualification and
                  verification procedures which entail a lot of administration
                  work, savings and in some cases a full audit of the works
                  carried out, our expert claims team deal with all the above.
                </Text>
                <Text style={[styles.DataTxt, {marginTop: 18}]}>
                  Contact us today and let our claims team take of your carbon
                  credit application.
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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.BackBtn}
            onPress={() => navigation.navigate('Home')}>
            <Text style={[styles.backTxt, CustomFont.Roboto_Reg]}>
              Back to Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
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
