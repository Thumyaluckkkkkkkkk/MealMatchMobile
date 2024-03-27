import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FoodCard = () => {
    return (
        <View style={styles.container}>
            {/* View ก้อนที่ 1 */}
            <View style={styles.header}>
                <Image style={styles.avatar} source={require("../../assets/week3/profile-2.jpg")} />
                <View style={styles.headerText}>
                    <Text style={styles.name}>Steve Garrett</Text>
                    <Text style={styles.metadata}>5 hours ago | 100k views</Text>
                </View>
            </View>
            {/* View ก้อนที่ 2 */}
            <View>
                <Image style={styles.image} source={require("../../assets/week3/trip-2.jpg")} />
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={styles.description}>
                <Text style={styles.title}>Overseas Adventure Travel In Nepal</Text>
                <Text style={styles.text}>Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        flexDirection: "row",
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    headerText: {
        paddingLeft: 10,
    },
    name: {
        fontSize: 20,
    },
    metadata: {
        color: "gray",
    },
    image: {
        resizeMode: "cover",
        aspectRatio: 4 / 2,
    },
    description: {
        padding: 10,
    },
    title: {
        fontSize: 20,
    },
    text: {
        color: '#444444',
    },
});

export default FoodCard;
