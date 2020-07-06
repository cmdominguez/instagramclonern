import React from "react";
import {View, StyleSheet, Image, Text} from "react-native";
import {HeaderPost} from "./HeaderPost";
import {FooterMedia} from './FooterMedia';
import {AddComment} from "./AddComment"
export const Post = () => {

    return (
        <View
            style={style.container}
        >
            <HeaderPost title={'nombre de un usuario'}/>
            <View style={{borderTopWidth: .5, borderColor: '#ccc'}}>
                <Image source={{uri: 'https://via.placeholder.com/150'}} style={style.media}/>
            </View>
            <FooterMedia/>
            <Text style={style.likeText}>
                500 Me gusta
            </Text>
            <Text style={style.commentText}>
                username <Text style={{fontWeight: '300'}}>Descripcion del
                contenido...</Text>
            </Text>
            <Text style={style.moreComments}>
                Ver los 6 comentarios
            </Text>
            <AddComment/>
            <Text style={style.moreComments}>
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
    likeText: {marginLeft: 6, fontSize: 14, fontWeight: '500'},
    commentText: {marginLeft: 6, marginTop: 6, fontSize: 14, fontWeight: '500'},
    moreComments: {marginLeft: 6, marginTop: 6, fontSize: 12, fontWeight: '200'}
});
