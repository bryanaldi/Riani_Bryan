import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

const film = [
    { name: 'Maleficentt', screen: 'Movie1', imageUrl: require('../assets/maleficent.jpg')},
    { name: 'Frozen 2', trailer: 'Movie2', imageUrl: require('../assets/frozen2.jpg')},
    { name: 'Charlie\'S Angels' , trailer: 'Movie3', imageUrl: require('../assets/frozen2.jpg')}
]

const HomeScreen = ({navigation}) => {
    return (
        <FlatList
        data={film}
        renderItem={({item}) =>
            <TouchableOpacity>
                <View>
                    <Image
                        style={{width: 200, height: 200}}
                        source={item.imageUrl}
                        onPress={()=> navigation.navigate(item.screen)}
                    />
                </View>
            </TouchableOpacity>
        }
        />
        
    );
};
export default HomeScreen;