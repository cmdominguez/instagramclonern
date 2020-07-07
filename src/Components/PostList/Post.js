import React from "react";
import {View, StyleSheet, Image, Text} from "react-native";
import {HeaderPost} from "./HeaderPost";
import {FooterMedia} from './FooterMedia';
import {AddComment} from "./AddComment"
import {Colors} from "../../Theme";

export const Post = ({post}) => {

    return (
        <View
            style={style.container}
        >
            <HeaderPost
                title={post.name}
                profilePicture={post.profilePicture}
                location={post.city}
            />
            <View
                style={{borderTopWidth: .5, borderColor: '#ccc'}}
            >
                <Image
                    source={{uri: post.media}}
                    style={style.media}
                />
            </View>
            <FooterMedia/>
            <Text
                style={style.likeText}
            >
                {post.likes} Me gusta
            </Text>
            <Text
                style={style.commentText}
                numberOfLines={2}
                ellipsizeMode='tail'
            >
                username <Text style={{fontWeight: '300'}}>{post.description}</Text>
            </Text>
            <Text
                style={style.moreComments}
            >
                Ver los {post.comments} comentarios
            </Text>
            <AddComment
                profilePicture={post.profilePicture}
            />
            <Text
                style={style.moreComments}
            >
                Hace 16 minutos <Text style={{fontWeight: '300'}}> Ver traducción</Text>
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    media: {
        height: 240
    },
    likeText: {marginLeft: 6, fontSize: 14, fontWeight: '500', color: Colors.textColor},
    commentText: {marginLeft: 6, marginTop: 6, fontSize: 14, fontWeight: '500', marginRight: 6, color: Colors.textColor},
    moreComments: {marginLeft: 6, marginTop: 6, fontSize: 12, fontWeight: '200', color: Colors.textColor}
});
