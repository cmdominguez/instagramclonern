import React from "react";
import {Image, View, StyleSheet, Text} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

export const AddComment = ({profilePicture}) => {
    return (
        <View
            style={style.container}
        >
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                <Image
                    source={{uri: profilePicture}}
                    style={style.circleImage}
                />
                <Text style={style.textAddComment}>
                    Agregar un comentario ...
                </Text>
            </View>
            <Text style={style.textAddComment}>
                😍   ❤
            </Text>
            <View style={{marginLeft: 12}}>
                <Icon name={'add-circle-outline'} size={15} color={'#808080'}/>
            </View>
        </View>
    );
};


const style = StyleSheet.create({
    circleImage: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 6
    },
    container: {
        marginHorizontal: 6,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textAddComment: {
        fontSize: 12,
        fontWeight: '200'
    }
});
