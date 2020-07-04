import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";

export const ItemHistoyList = ({label}) => {
    return (
        <View
            style={style.container}
        >
            <Image
                source={{uri: 'https://via.placeholder.com/150'}}
                style={style.circleImage}
            />
            <Text
                style={style.usernameLabel}
            >
                {label}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6
    },
    circleImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: '#0099ff'
    },
    usernameLabel: {
        marginTop: 4
    }
});
