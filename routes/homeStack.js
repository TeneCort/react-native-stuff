import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({navigation}) => (

  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
      height: 60
    }}
  >

    <Screen
      name='Home'
      component={Home}
      options={{ 
        headerTitle: (props) => <Header {...props} navigation={navigation} title='Game Zone'/>
      }}
    />

    <Screen
      name='ReviewDetails'
      component={ReviewDetails}
      options={({route}) => ({title: route.params.item.title + " Review"})}
    />
  </Navigator>
);

export default HomeStack;
