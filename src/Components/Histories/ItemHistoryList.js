import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const ItemHistoyList = ({label}) => {
    return (
        <View
            style={style.container}
        >
            <LinearGradient
                style={style.borderColor}
                colors={['#fa7e1e', '#d62976', '#962fbf']}
                useAngle
                angle={20}
            >
                <Image
                    source={{uri: 'https://via.placeholder.com/150'}}
                    style={style.circleImage}
                />
            </LinearGradient>
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
        width: 74,
        height: 74,
        borderRadius: 40,
    },
    usernameLabel: {
        marginTop: 4
    },
    borderColor: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
