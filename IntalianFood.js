import React from "react";
import { View, Text, FlatList, Image } from "react-native";

export default function Datalist(props) {
    const tours = [
        { id: 1, title: 'Pizza', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/3.1.jpg' },
        { id: 2, title: 'Spaghetti', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/3.2.jpg' },
        { id: 3, title: 'Lasagna', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/3.3.jpg' },
        { id: 4, title: 'Rishotto', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/3.4.jpg' },
        { id: 5, title: 'Ravioli', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/3.5.jpg' },
        { id: 6, title: 'Focaccia', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/3.6.jpg' },
        { id: 7, title: 'Tortellini', image: 'https://raw.githubusercontent.com/Thumyaluckkkkkkkkk/MealMatchMobile/main/3.7.jpg' }
    ];
    return (
        <View style={{ backgroundColor: '#A52A2A' }}>
            <View style={props.style}>
                <Text>Eat with FlatList</Text>
                <Text style={{ fontSize: 30, color : '#F5F5F5' }}>Intalian Food</Text>
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