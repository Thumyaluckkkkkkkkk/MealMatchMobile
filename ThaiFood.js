import React from "react";
import { View, Text, FlatList, Image } from "react-native";

export default function Datalist(props) {
    const tours = [
        { id: 1, title: 'Papaya Salad', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/1.1.jpg' },
        { id: 2, title: 'Spicy Prawn Soup', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/1.2.jpg' },
        { id: 3, title: 'Minced Pork with Basil', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/1.3.jpg' },
        { id: 4, title: 'Stir-fried Chicken with Cashew nuts', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/1.4.jpg' },
        { id: 5, title: 'Cha Om Shrimp Soup', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/1.5.jpg' },
        { id: 6, title: 'Pad Thai', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/1.6.jpg' },
        { id: 7, title: 'Rice mixed with Shrimp paste', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/1.7.jpg' }
    ];
    return (
        <View style={{ backgroundColor: '#A52A2A' }}>
            <View style={props.style}>
                <Text>Eat with FlatList</Text>
                <Text style={{ fontSize: 30, color : '#F5F5F5' }}>Thai Food</Text>
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
