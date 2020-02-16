import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native'
import MapHeader from '../components/MapHeader';

const MapScreen = props => {
    return (
        <View>
            <MapHeader />
            <Text>Map Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MapScreen;
