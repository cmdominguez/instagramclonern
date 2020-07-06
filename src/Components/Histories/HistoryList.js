import React from "react";
import {FlatList, View, StyleSheet, Dimensions} from "react-native";
import {ItemHistoyList} from "./ItemHistoryList";

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
        maxHeight: 150,
        width: Dimensions.get('screen').width,
        paddingVertical: 8,
        borderBottomWidth: .5,
        borderColor: '#ccc',
        marginBottom: 12
    }
});
