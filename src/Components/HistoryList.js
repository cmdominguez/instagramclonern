import React from "react";
import {FlatList, View, StyleSheet, Dimensions} from "react-native";
import {ItemHistoyList} from "./ItemHistoryList";
import {Colors} from "../Theme";

export const HistoryList = () => {


    const mockData = [
        {
            username: 'Angular'
        },
        {
            username: 'Ionic'
        },
        {
            username: 'React'
        }
    ];

    const renderItem = ({item}) => {
        return (
            <ItemHistoyList label={item.username}/>
        );
    };

    return (
        <View style={style.container}>
            <FlatList
                data={mockData}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
};


const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        maxHeight: 120,
        width: Dimensions.get('screen').width,
        paddingVertical: 8
    }
});
