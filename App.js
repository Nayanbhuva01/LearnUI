import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPassword from './src/screens/ForgotPassword';
import MessageSentForgotPass from './src/screens/MessageSentForgotPass';
import NewPasswordCreate from './src/screens/NewPasswordCreate';
import SignUp from './src/screens/SignUp';
import AccountRegistration from './src/screens/AccountRegistration';
import RegistrationSuccess from './src/screens/RegistrationSuccess';
import Home from './src/screens/Home';
import CreateSurvey from './src/screens/CreateSurvey';
import SavedFittings from './src/screens/SavedFittings';
import NewFittingWizard from './src/screens/NewFittingWizard';
import S1FittingWizard from './src/screens/Wizard/S1FittingWizard';
import CreateFittings from './src/screens/WithotWizard/CreateFittings';
import FittingType from './src/screens/Wizard/FittingType';
import S2NormalSize from './src/screens/Wizard/S2NormalSize';
import S2CircleSize from './src/screens/Wizard/S2CircleSize';
import S3Quantity from './src/screens/Wizard/S3Quantity';
import S4OperatingTime from './src/screens/Wizard/S4OperatingTime';
import S5Power from './src/screens/Wizard/S5Power';
import S6Location from './src/screens/Wizard/S6Location';
import S7Picture from './src/screens/Wizard/S7Picture';
import EmergencyFitting from './src/screens/Wizard/EmergencyFitting';
import VerifyPlan from './src/screens/Wizard/VerifyPlan';
import FittingSuccess from './src/screens/Wizard/FittingSuccess';
import EditFitting from './src/screens/EditFitting';
import DeleteFitting from './src/screens/DeleteFitting';
import DeleteSuccess from './src/screens/DeleteSuccess';
import CompleteSurveyVerify from './src/screens/CompleteSurveyVerify';
import SubmitSuccess from './src/screens/SubmitSuccess';
import MySurveys from './src/screens/MySurveys/MySurveys';
import SurveyOverview from './src/screens/MySurveys/SurveyOverview';
import DeleteSurvey from './src/screens/MySurveys/DeleteSurvey';
import SurveyDeleteSuccess from './src/screens/MySurveys/SurveyDeleteSuccess';
import MySurveyBlank from './src/screens/MySurveys/MySurveyBlank';
import MyAccount from './src/screens/MyAccount/MyAccount';
import DeleteAccount from './src/screens/MyAccount/DeleteAccount';
import DeleteAccSuccess from './src/screens/MyAccount/DeleteAccSuccess';
import ContactUs from './src/screens/ContactUs/ContactUs';
import SendContactUsSuccess from './src/screens/ContactUs/SendContactUsSuccess';
import CalculateCarbonCredit from './src/screens/CalculateCarbonCredit/CalculateCarbonCredit';
import DialuxDesign from './src/screens/DialuxDesign/DialuxDesign';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="messageSentForgotPass"
          component={MessageSentForgotPass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPasswordCreate"
          component={NewPasswordCreate}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountRegistration"
          component={AccountRegistration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegistrationSuccess"
          component={RegistrationSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateSurvey"
          component={CreateSurvey}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SavedFittings"
          component={SavedFittings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewFittingWizard"
          component={NewFittingWizard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="S1FittingWizard"
          component={S1FittingWizard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateFittings"
          component={CreateFittings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FittingType"
          component={FittingType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="S2NormalSize"
          component={S2NormalSize}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="S2CircleSize"
          component={S2CircleSize}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="S3Quantity"
          component={S3Quantity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="S4OperatingTime"
          component={S4OperatingTime}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="S5Power"
          component={S5Power}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="S6Location"
          component={S6Location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="S7Picture"
          component={S7Picture}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmergencyFitting"
          component={EmergencyFitting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyPlan"
          component={VerifyPlan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FittingSuccess"
          component={FittingSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditFitting"
          component={EditFitting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeleteFitting"
          component={DeleteFitting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeleteSuccess"
          component={DeleteSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompleteSurveyVerify"
          component={CompleteSurveyVerify}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubmitSuccess"
          component={SubmitSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MySurveys"
          component={MySurveys}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SurveyOverview"
          component={SurveyOverview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeleteSurvey"
          component={DeleteSurvey}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SurveyDeleteSuccess"
          component={SurveyDeleteSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MySurveyBlank"
          component={MySurveyBlank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyAccount"
          component={MyAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeleteAccount"
          component={DeleteAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeleteAccSuccess"
          component={DeleteAccSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SendContactUsSuccess"
          component={SendContactUsSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalculateCarbonCredit"
          component={CalculateCarbonCredit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DialuxDesign"
          component={DialuxDesign}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
