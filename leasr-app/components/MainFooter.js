import React from 'react';
import { View, StyleSheet, SectionList, TouchableHighlight, Text } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const MainFooter = props => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.iconContainer}>
                <TouchableHighlight activeOpacity={0.6} underlayColor='white' onPress={() => {}}>
                    <MaterialCommunityIcons style={styles.icon}name='map-search-outline' size={30} color={Colors.primary}/>  
                </TouchableHighlight>
                <Text>Explore</Text>
            </View>
            
            <View style={styles.iconContainer}>
                <TouchableHighlight activeOpacity={0.6} underlayColor='white' onPress={() => {}}>
                    <Feather name='message-circle' size={30} color={Colors.primary}/>
                </TouchableHighlight>
                <Text>Inbox</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableHighlight activeOpacity={0.6} underlayColor='white' onPress={() => {}}>
                    <Feather name='user' size={30} color={Colors.primary}/>
                </TouchableHighlight>
                <Text>Profile</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableHighlight activeOpacity={0.6} underlayColor='white' onPress={() => {}}>
                    <Feather name='menu' size={30} color={Colors.primary}/>
                </TouchableHighlight>
                <Text>More</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        width: '100%',
        height: 95,
        paddingBottom: 36,
        backgroundColor: 'white',
        bottom: 0,
        position: 'absolute',
        borderTopColor: 'lightgray',
        borderTopWidth: 0.5,
        flexDirection: 'row'
    },
    list: {
        flexDirection: 'row',
    },
    iconContainer: {
        flex:1,
        alignItems: 'center',
        paddingTop: 6,
        paddingLeft: 15,
        paddingRight: 10,
    },

});

export default MainFooter;