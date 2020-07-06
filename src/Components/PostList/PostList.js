import React from "react";
import {FlatList} from "react-native";
import {HistoryList} from "../Histories/HistoryList";
import {Post} from "./Post"

export const PostList = ({data}) => {

    return (
        <FlatList
            data={data}
            renderItem={({item}) => {
                return <Post post={item} />
            }}
            ListHeaderComponent={
                <HistoryList/>
            }
            keyExtractor={(item, index) => String(index)}
        />
    );
};
