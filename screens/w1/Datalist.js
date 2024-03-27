import React from "react";
import { View, Text, FlatList, Image } from "react-native";

export default function Datalist(props) {
    const tours = [
        { "id": "1", "title": "Thai Food", "image": require('../../assets/7.jpg') },
        { "id": "2", "title": "Korean Food", "image": require('../../assets/download.jpg')  },
        { "id": "3", "title": "Italian Food", "image": require('../../assets/download (1).jpg') },
        { "id": "4", "title": "Indian Food",  "image": require('../../assets/8.jpg') },
        { "id": "5", "title": "Japanese Food", "image": require('../../assets/6.jpg') }
    ];
    return (
        <View style={props.style}>
            <Text>Eat with FlatList</Text>
            <Text>Let's find the food that suits you</Text>
            <FlatList 
            horizontal={true}
            data={tours}
            renderItem={({ item, index }) => {
                console.log(item, index, item.uri);
                return (
                    <View style={{ margin: 10 }}>
                        <Image
                            source={{ uri: item.uri }}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text>{item.title}</Text>
                    </View>
                );
            }}
            keyExtractor={item => item.id}
             />
        </View>
    );
}
