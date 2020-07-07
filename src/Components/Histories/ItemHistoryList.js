import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "../../Theme";

export const ItemHistoyList = ({label, media}) => {
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
                    source={{uri: media}}
                    style={style.circleImage}
                />
            </LinearGradient>
            <Text
                style={style.usernameLabel}
                numberOfLines={1}
                ellipsizeMode='tail'
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
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: '#fff',
        borderWidth: 3
    },
    usernameLabel: {
        marginTop: 4,
        color: Colors.textColor,
        maxWidth: 60
    },
    borderColor: {
        width: 66,
        height: 66,
        borderRadius: 34,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
