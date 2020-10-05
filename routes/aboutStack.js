import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

const AboutStack = ({navigation}) => (

  <Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#eee'},
      headerTintColor: '#444'
  }}>

    <Screen 
      name="About" 
      component={About} 
      options={{
        headerTitle: (props) => <Header {...props} navigation={navigation} title='About Game Zone'/>
      }} 
    />

  </Navigator>

);

export default AboutStack;
