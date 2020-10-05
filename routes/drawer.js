import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
import FormStack from "./formStack";

const { Navigator, Screen } = createDrawerNavigator();

const RootDrawerNavigator = () => (

    <Navigator>

        <Screen 
            name="Home" 
            component={HomeStack}
        />

        <Screen 
            name="About" 
            component={AboutStack}
        />

        <Screen 
            name="Form" 
            component={FormStack}
        />

    </Navigator>
  
);
  
export const Drawer = () => (
    <NavigationContainer>
        <RootDrawerNavigator/>
    </NavigationContainer>
);