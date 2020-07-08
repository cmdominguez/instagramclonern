import React from "react";
import {FlatList, View, StyleSheet, Dimensions} from "react-native";
import {ItemStoriesList} from "./ItemStoriesList";
import data from "../../assets/historiesData"

export const StoriesList = () => {

    const renderItem = ({item}) => {
        return (
            <ItemStoriesList label={item.name} media={item.picture}/>
        );
    };

    return (
        <View style={style.container}>
            <FlatList
                data={data}
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
