import React from 'react';
import { Image, ScrollView, View } from 'react-native';

export default function Section1() {
    return (
        <ScrollView horizontal>
            <View style={{ flexDirection: 'column' }}>
                <Image style={{ width: 200, height: 120, resizeMode: 'cover', borderRadius: 10 }}
                    source={require('../../assets/1.jpg')} />
                <Image style={{ width: 200, height: 120, resizeMode: 'cover', borderRadius: 10, marginTop: 10 }}
                    source={require('../../assets/2.jpg')} />
                <Image style={{ width: 200, height: 120, resizeMode: 'cover', borderRadius: 10, marginTop: 10 }}
                    source={require('../../assets/3.jpg')} />
            </View>
        </ScrollView>
    );
}
