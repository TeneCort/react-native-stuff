import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation, title}){
    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>

            <MaterialIcons name={'menu'} size={28} onPress={openMenu} style={styles.icon}/>
            <Text style={styles.headerText}>{title}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        width:'100%',
        height:'100%',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        alignSelf: 'center'
    },
    icon: {
        alignSelf: 'flex-start',
    }
})