import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Colors from '../constants/colors';
import MapSearchBar from '../components/MapSearchBar';

const MainFooter = props => {
    return (
        <View style={styles.header}>
            {/* <MapSearchBar /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 40
    },
});

export default MainFooter;