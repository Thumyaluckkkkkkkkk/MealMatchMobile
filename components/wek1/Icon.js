import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function FoodIcon(props) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome name={props.name} size={props.size} color={props.color} />
            <Text>{props.title}</Text>
        </View>
    );
}
