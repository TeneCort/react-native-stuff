import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Form from "../screens/form";
import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

const AboutStack = ({navigation}) => (

  <Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#eee'},
      headerTintColor: '#444'
  }}>

    <Screen 
      name="Form" 
      component={Form} 
      options={{
        headerTitle: (props) => <Header {...props} navigation={navigation} title='Form'/>
      }} 
    />

  </Navigator>

);

export default AboutStack;
