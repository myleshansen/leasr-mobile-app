import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const SearchButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.button}>
                <View></View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
});

export default SearchButton;