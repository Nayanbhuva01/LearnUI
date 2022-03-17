import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {CameraPinkIcon, LogoIcon} from '../../assets/svgs';
import CustomFont from '../utils/CustomFont';
import Input from '../component/Input';
import RadioForm from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox';
import Button from '../component/Button';
import WithBackground from '../hoc/WithBackground';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function EditFitting({navigation}) {
  const [check, setCheck] = useState(false);
  const [radio, setRadio] = useState(0);

  const radioProp = [
    {label: 'Rectangular', value: 0},
    {label: 'Circle', value: 1},
  ];

  return (
    <WithBackground>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20,
        }}>
        <View style={styles.LogoBG}>
          <LogoIcon style={styles.Logo} />
        </View>
        <View style={styles.FContainer}>
          <Text style={[styles.AText, CustomFont.Roboto_Bol]}>
            Edit fitting
          </Text>
          <View style={styles.BoxContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.labelTxt}>Fitting Name: </Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder="Please enter fitting name" />
              </View>
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.labelTxt}>Quantity: </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Please enter quantity"
                  keyboardType="number-pad"
                />
                <View style={styles.innInputCont}>
                  <Text style={{color: '#000'}}>pcs</Text>
                </View>
              </View>
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.labelTxt}>Hours per year:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Please enter number"
                  keyboardType="number-pad"
                />
                <View style={styles.innInputCont}>
                  <Text style={{color: '#000'}}>h</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{marginBottom: 10}}>
            <Text style={[styles.titleTxt, CustomFont.Roboto_Reg]}>
              Fitting Type
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <RadioForm
              radio_props={radioProp}
              initial={0}
              formHorizontal={true}
              buttonSize={10}
              buttonColor={'#DDDDDD'}
              selectedButtonColor={'#FD5086'}
              style={{marginBottom: 10}}
              onPress={value => setRadio(value)}
            />
          </View>

          <View style={{marginBottom: 10}}>
            <Text style={[styles.titleTxt, CustomFont.Roboto_Reg]}>
              Fitting Size (mm)
            </Text>
          </View>

          <View style={styles.innerContainer}>
            {radio == 0 ? (
              <>
                <View key={'length'} style={styles.SMinputContainer}>
                  <TextInput
                    style={styles.SMInput}
                    placeholder="Lenght"
                    keyboardType="number-pad"
                  />
                </View>
                <View key={'width'} style={styles.SMinputContainer}>
                  <TextInput
                    style={styles.SMInput}
                    placeholder="Width"
                    keyboardType="number-pad"
                  />
                </View>
                <View key="height" style={styles.SMinputContainer}>
                  <TextInput
                    style={styles.SMInput}
                    placeholder="Height"
                    keyboardType="number-pad"
                  />
                </View>
              </>
            ) : (
              <>
                <View key="diameter" style={styles.SMinputContainer}>
                  <TextInput
                    style={styles.SMInput}
                    placeholder="Diameter"
                    keyboardType="number-pad"
                  />
                </View>
                <View key="size" style={styles.SMinputContainer}>
                  <TextInput
                    style={styles.SMInput}
                    placeholder="Cut Hole Size"
                    keyboardType="number-pad"
                  />
                </View>
              </>
            )}
          </View>

          <View style={styles.BoxContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.labelTxt}>Total Watts:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Please enter number"
                  keyboardType="number-pad"
                />
                <View style={styles.innInputCont}>
                  <Text style={{color: '#000'}}>W</Text>
                </View>
              </View>
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.labelTxt}>Location:</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder="Please enter location" />
              </View>
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.labelTxt}>Image:</Text>

              <View style={{flex: 3}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('../../assets/bathroom-led.png')} />
                  <View
                    style={{
                      position: 'absolute',
                      borderWidth: 1,
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: '#D7D7D7',
                      padding: 8,
                    }}>
                    <TouchableOpacity>
                      <CameraPinkIcon />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{width: windowWidth * 0.9}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <CheckBox
                disabled={false}
                value={check}
                onValueChange={value => setCheck(value)}
              />
              <TouchableOpacity>
                <Text style={styles.titleTxt}>
                  This is an emergency fitting
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.FContainer}>
          <Text style={[styles.AText, CustomFont.Roboto_Bol]}>
            Cost Overview
          </Text>
          <View style={styles.BoxContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.labelTxt}>Labout Cost:</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder="€150.00 " keyboardType="number-pad" />
              </View>
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.labelTxt}>Fitting cost:</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder="€750.00 " keyboardType="number-pad" />
              </View>
            </View>
          </View>
        </View>

        <Button BtnName="Save" onPress={() => navigation.goBack()} />

        <TouchableOpacity
          style={styles.DeleteBtn}
          onPress={() => navigation.navigate('DeleteFitting')}>
          <Text style={[styles.DeletTxt, CustomFont.Roboto_Reg]}>
            Delete Fitting
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </WithBackground>
  );
}

const styles = StyleSheet.create({
  LogoBG: {
    backgroundColor: '#FD5086',
    width: windowWidth * 1,
    height: windowHeight * 0.16,
    alignItems: 'center',
  },
  Logo: {
    top: 20,
  },

  AText: {
    fontSize: 21.96,
    color: '#000',
    marginBottom: 10,
  },

  FContainer: {
    backgroundColor: '#fff',
    width: windowWidth * 0.95,
    marginVertical: 10,
    alignItems: 'center',
    padding: 20,
  },

  BoxContainer: {
    width: windowWidth * 0.9,
    alignItems: 'center',
    padding: 10,
  },

  innerContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    width: windowWidth * 0.8,
  },

  labelTxt: {
    flex: 2,
    color: '#000',
    fontSize: 14,
    textAlign: 'left',
  },

  inputContainer: {
    flexDirection: 'row',
    flex: 3,
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
  },

  innInputCont: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    height: '100%',
    width: '18%',
    backgroundColor: '#E4E4E4',
  },

  titleTxt: {
    color: '#000',
    fontSize: 14,
  },

  SMinputContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    marginHorizontal: 3,
    flexWrap: 'nowrap',
  },

  SMInput: {
    textAlign: 'center',
  },

  DeleteBtn: {
    marginTop: 20,
  },
  DeletTxt: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  CompleteBtn: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.08,
    width: windowWidth * 0.8,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  completeBtnTxt: {
    fontSize: 20,
    color: '#fff',
    opacity: 0.4,
  },
});
