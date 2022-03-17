import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {BlockIcon, LogoIcon, RightIcon, WrongIcon} from '../../assets/svgs';
import CustomFont from '../utils/CustomFont';
import Button from '../component/Button';
import WithBackground from '../hoc/WithBackground';
import LogoWithBar from '../hoc/LogoWithBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({navigation}) {
  const [surveyName, setSurveyName] = useState(null);
  const [workName, setWorkName] = useState(null);
  const [AddName, setAddName] = useState(null);

  const [IsValidSurName, setIsValidSurName] = useState(0);
  const [IsValidWorkName, setIsValidWorkName] = useState(0);
  const [IsValidAddName, setIsValidAddName] = useState(0);

  const SurveyNameHandler = () => {
    if (surveyName) {
      if (surveyName.length > 3) {
        setIsValidSurName(1);
      } else {
        setIsValidSurName(2);
      }
    } else {
      setIsValidSurName(0);
    }
  };
  const SurveyWorkHandler = () => {
    if (workName) {
      if (workName.length > 4) {
        setIsValidWorkName(1);
      } else {
        setIsValidWorkName(2);
      }
    } else {
      setIsValidWorkName(0);
    }
  };
  const SurveyAddHandler = () => {
    if (AddName) {
      if (AddName.length > 7) {
        setIsValidAddName(1);
      } else {
        setIsValidAddName(2);
      }
    } else {
      setIsValidAddName(0);
    }
  };

  const NextHandler = () => {
    navigation.navigate('SavedFittings');
  };

  return (
    <WithBackground>
      <View
        style={{
          flex: 1,
          // justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <LogoWithBar />
        <View style={styles.FContainer}>
          <Text style={[styles.AText, CustomFont.Roboto_Bol]}>
            Create Survey
          </Text>
          <View style={styles.Input}>
            <TextInput
              placeholder="Test Survey #1"
              placeholderTextColor={'#000'}
              onChangeText={value => setSurveyName(value)}
              onEndEditing={SurveyNameHandler}
            />
            {IsValidSurName === 0 ? null : IsValidSurName === 1 ? (
              <RightIcon style={styles.Icon} />
            ) : (
              <WrongIcon style={styles.Icon} />
            )}
          </View>
          <View style={styles.Input}>
            <TextInput
              placeholder="Petar’s Lighting Solutions"
              placeholderTextColor={'#a0a4ab'}
              onChangeText={value => setWorkName(value)}
              onEndEditing={SurveyWorkHandler}
            />
            {IsValidWorkName === 0 ? null : IsValidWorkName === 1 ? (
              <RightIcon style={styles.Icon} />
            ) : (
              <WrongIcon style={styles.Icon} />
            )}
          </View>
          <View style={styles.Input}>
            <TextInput
              placeholder="49a Kilsheelan Clonmel, Clonmel"
              placeholderTextColor={'#a0a4ab'}
              onChangeText={value => setAddName(value)}
              onEndEditing={SurveyAddHandler}
            />
            {IsValidAddName === 0 ? null : IsValidAddName === 1 ? (
              <RightIcon style={styles.Icon} />
            ) : (
              <WrongIcon style={styles.Icon} />
            )}
          </View>
          <View style={styles.SelectCont}>
            <View style={styles.CoContainer}>
              <Text style={styles.AllText}>Operational Hours per Year:</Text>
              <View style={styles.SmallInput}>
                <TextInput
                  placeholder="5000"
                  style={styles.Sminput}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            <Text style={{position: 'absolute', right: 5}}>h</Text>
          </View>

          <View style={styles.SelectContB}>
            <View style={styles.CoContainerB}>
              <Text style={styles.AllTextB}>Rate per KWh:</Text>
              <View style={styles.SmallInputB}>
                <TextInput
                  placeholder="0.789551"
                  style={styles.SminputB}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            <Text style={{position: 'absolute', right: 5}}>€</Text>
          </View>
          <Button BtnName="Next" onPress={NextHandler} />
        </View>

        <View style={styles.Buttons}>
          <TouchableOpacity
            style={styles.BackBtn}
            onPress={() => navigation.goBack()}>
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
  BlockIcon: {
    right: '45%',
  },

  FContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    width: windowWidth * 0.95,
    marginVertical: 10,
    alignItems: 'center',
    padding: 20,
  },
  AText: {
    fontSize: 21.96,
    color: '#000',
    marginBottom: 20,
  },

  Input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: '#EEEEEE',
    width: windowWidth * 0.87,
    marginBottom: 4,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  Icon: {
    position: 'absolute',
    right: 10,
  },

  SelectCont: {
    width: windowWidth * 0.95,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  CoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth * 0.87,
    justifyContent: 'flex-end',
  },

  Sminput: {
    width: windowWidth * 0.1,
  },

  SmallInput: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: '#EEEEEE',
    width: windowWidth * 0.3,
    alignItems: 'center',
  },
  AllText: {
    fontSize: 14,
    color: '#000',
    paddingRight: 40,
  },

  SelectContB: {
    width: windowWidth * 0.95,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  CoContainerB: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth * 0.87,
    justifyContent: 'flex-end',
  },

  SmallInputB: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: '#EEEEEE',
    width: windowWidth * 0.3,
    alignItems: 'center',
  },
  AllTextB: {
    right: 80,
    fontSize: 14,
    color: '#000',
    paddingRight: 40,
  },
  SminputB: {
    width: windowWidth * 0.18,
  },

  Buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },

  BackBtn: {
    marginTop: 50,
  },
  backTxt: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
