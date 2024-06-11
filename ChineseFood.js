import React from "react";
import { View, Text, FlatList, Image } from "react-native";

export default function Datalist(props) {
    const tours = [
        { id: 1, title: 'Peking Duck', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/4.1.jpg' },
        { id: 2, title: 'Steamed Rice topped with Chicken', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/4.2.jpg' },
        { id: 3, title: 'Dim Sum', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/4.3.jpg' },
        { id: 4, title: 'Stir-fried Noodles', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/4.4.jpg' },
        { id: 5, title: 'Noodle Rolls', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/4.5.jpg' },
        { id: 6, title: 'Fish Maw', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/4.6.jpg' },
        { id: 7, title: 'Baked Shrimp with Glass Noodles', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/4.7.jpg' }
    ];
    return (
        <View style={{ backgroundColor: '#A52A2A' }}>
            <View style={props.style}>
                <Text>Eat with FlatList</Text>
                <Text style={{ fontSize: 30, color : '#F5F5F5' }}>Chinese Food</Text>
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
