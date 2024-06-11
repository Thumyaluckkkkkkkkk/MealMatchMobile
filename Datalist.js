import React from "react";
import { View, Text, FlatList, Image } from "react-native";

export default function Datalist(props) {
    const tours = [
        { id: 1, title: 'Thai Food', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/7.jpg' },
        { id: 2, title: 'Korean Food', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/download.jpg' },
        { id: 3, title: 'Italian Food', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/download%20(1).jpg' },
        { id: 4, title: 'Chinese Food', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/9.jpg' },
        { id: 5, title: 'Japanese Food', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/6.jpg' }
    ];
    return (
        <View style={{ backgroundColor: '#A52A2A' }}>
            <View style={props.style}>
                <Text>Eat with FlatList</Text>
                <Text style={{ fontSize: 30, color : '#F5F5F5' }}>Let's find the food that suits you</Text>
                <FlatList
                    horizontal={false}
                    data={tours}
                    renderItem={({ item, index }) => {
                        console.log(item, index, item.image);
                        return (
                            <View style={{ margin: 10, alignItems: 'center' }}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: 400, height: 250 }}
                                />
                                <Text style={{ fontSize: 20, color: '#FFFF66' }}>{item.title}</Text>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}
