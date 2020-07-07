import React from "react";
import {View, StyleSheet, Image, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {Colors} from "../../Theme";

export const HeaderPost = ({title, profilePicture, location}) => {

    return (
        <View
            style={style.container}
        >
            <Image source={{uri: profilePicture}} style={style.image}/>
            <View style={{flex:1}}>
                <Text style={style.usernameLabel}>
                    {title}
                </Text>
                <Text style={style.location}>
                    {location}
                </Text>
            </View>
            <Icon name={'ellipsis-horizontal'} style={{width: 30}} size={20} color={Colors.textColor}/>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
        marginHorizontal: 6,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 20
    },
    usernameLabel: {
        color: Colors.textColor
    },
    location: {
        fontSize: 12,
        fontWeight: '200',
        color: Colors.textColor
    }
});
