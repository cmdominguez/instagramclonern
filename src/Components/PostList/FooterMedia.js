import React from "react";
import {View, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {Colors} from "../../Theme";

export const FooterMedia = () => {
    return (
        <View
            style={style.container}
        >
            <View style={{flexDirection: 'row'}}>
                <Icon name={'heart-outline'} size={25} style={{marginRight: 16}} color={Colors.textColor}/>
                <Icon name={'chatbubble-outline'} size={25} style={{marginRight: 16}} color={Colors.textColor}/>
                <Icon name={'send-outline'} size={25} color={Colors.textColor}/>
            </View>
            <Icon name={'bookmark-outline'} size={25} color={Colors.textColor}/>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginHorizontal: 6,
        marginTop: 6,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
