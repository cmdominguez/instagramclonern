import React from "react";
import {View, StyleSheet, Image, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const HeaderPost = ({title}) => {

    return (
        <View
            style={style.container}
        >
            <Image source={{uri: 'https://via.placeholder.com/150'}} style={style.image}/>
            <View style={{flex:1}}>
                <Text style={style.usernameLabel}>
                    {title}
                </Text>
                <Text style={style.location}>
                    Location
                </Text>
            </View>
            <Icon name={'ellipsis-horizontal'} style={{width: 30}} size={20}/>
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

    },
    location: {
        fontSize: 12,
        fontWeight: '200'
    }
});
