import React from "react";
import {FlatList} from "react-native";
import {StoriesList} from "../Histories/StoriesList";
import {Post} from "./Post"

export const PostList = ({data}) => {

    return (
        <FlatList
            data={data}
            renderItem={({item}) => {
                return <Post post={item} />
            }}
            ListHeaderComponent={
                <StoriesList/>
            }
            keyExtractor={(item, index) => String(index)}
        />
    );
};
