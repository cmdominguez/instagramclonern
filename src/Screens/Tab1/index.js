/**
 * @flow
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LightColors as Colors} from '../../Theme';
import {HistoryList} from "../../Components/Histories/HistoryList";

export const Tab1 = () => {

    return (
        <View style={style.container}>
            <HistoryList/>
        </View>
    );
};

Tab1.options = {
    topBar: {
        title: {
            text: 'Tab 1'
        },
    },
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        color: Colors.textColor,
    },
});
