/**
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../Theme';

export const Tab2 = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>TAB 2</Text>
        </View>
    );
};

Tab2.options = {
    topBar: {
        title: {
            text: 'Tab 2'
        },
    },
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.textColor,
    },
});
