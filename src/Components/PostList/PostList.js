import React from "react";
import {FlatList} from "react-native";
import {HistoryList} from "../Histories/HistoryList";
import {Post} from "./Post"

export const PostList = () => {

    return (
        <FlatList
            data={[1, 1, 1, 1]}
            renderItem={() => {
                return <Post />
            }}
            ListHeaderComponent={
                <HistoryList/>
            }
            keyExtractor={(item, index) => String(index)}
        />
    );
};
