import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button, Alert} from 'react-native';
import Constants from 'expo-constants';

const animal = [
    { name: 'Orang Utan (Pongo pygemus)', imageUrl: 'http://i0.wp.com/www.satujam.com/wp-content/uploads/2015/04/orang-utan.jpg?resize=900%2C450', Description: 'Deskripsi: seperti kera namun memiliki rambut yang panjang'},
    { name: 'Singapuar (Tarsius bancanus)', imageUrl: 'http://i1.wp.com/www.satujam.com/wp-content/uploads/2015/04/singapuar.jpg?resize=900%2C675', Description: 'Deskripsi: mempunyai sepasang mata besar yang ukurannya melebihi volume otaknya sendiri'},
    { name: 'Anoa (Bubalus depressicornis)', imageUrl: 'http://i1.wp.com/www.satujam.com/wp-content/uploads/2015/04/anoa.jpg?resize=900%2C675', Description: 'Deskripsi: mirip seperti kambing namun memiliki tubuh yg lebih besar dan tanduk runcing'},
    { name: 'Komodo (Varanus Komodoensis)', imageUrl: 'http://i0.wp.com/www.satujam.com/wp-content/uploads/2015/04/komodo.jpg?resize=900%2C675', Description: 'Deskripsi: termasuk spesies kadal paling besar di dunia'},
    { name: 'Badak Jawa (Rhinoceros Sondaicus)', imageUrl: 'https://lh3.googleusercontent.com/-Dj0y6vH3SyY/UNHXHTRkO8I/AAAAAAAAC4I/fqssjgH9EZQ/s800/Badak%2520Bercula%2520Satu%2520Jawa%2520Rhinoceros%2520sondaicus.jpg', Description: 'Deskripsi: memiliki kulit seperti baju baja serupa dengan hewan-hewan purbakala'},
    { name: 'Beo Nias (Gracula religiosa robusta)', imageUrl: 'https://lh3.googleusercontent.com/-rXqYdgE6048/UNHblg5LOZI/AAAAAAAAC4c/wBoWhOjTkx8/s800/Beo%2520Nias%2520Gracula%2520religiosa%2520robusta.jpg', Description: 'Deskripsi: memiliki epasang cuping telinga yang menyatu dan menggelambir ke arah leher'},
    
];

const CobaScreen = () => {
    return (
        
        <FlatList 
            data={animal}
            renderItem={({ item })=>
                
                <View style={styles.textStyle}>
                    <Image 
                        style={{width: 378, height: 340}}
                        source={{uri: item.imageUrl}}
                    />
                    
                    <Button
                        title={item.name}
                        onPress={() => Alert.alert(item.Description)}
                    />
                    
                    
                </View>
                }
                
                
            keyExtractor={item => item.name}
            
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        textAlign: 'center',
        marginVertical: 8,
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },    
});

export default CobaScreen;