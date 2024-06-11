import React from "react";
import { View, Text, FlatList, Image } from "react-native";

export default function Datalist(props) {
    const tours = [
        { id: 1, title: 'Kimchi Soup', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/2.1.jpg' },
        { id: 2, title: 'Bibimbap', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/2.2.jpg' },
        { id: 3, title: 'Korean fried chicken', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/2..jpg' },
        { id: 4, title: 'Toppoki', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/2.4.jpg' },
        { id: 5, title: 'Kimbab', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/2.5.jpg' },
        { id: 6, title: 'Ramyun', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/2.6.jpg' },
        { id: 7, title: 'Jabchae', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/2.7.jpg' }
    ];
    return (
        <View style={{ backgroundColor: '#A52A2A' }}>
            <View style={props.style}>
                <Text>Eat with FlatList</Text>
                <Text style={{ fontSize: 30, color : '#F5F5F5' }}>Korean Food</Text>
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
