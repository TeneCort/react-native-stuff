import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';

export default function Home({ navigation })
{
    const onPressHandler = () =>{
        navigation.navigate('ReviewDetails');
        //navigation.push('ReviewDetails');
    }

    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Gotta Cath Them All (again)', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
    ])

    return(
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {navigation.navigate('ReviewDetails', {item})}}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
