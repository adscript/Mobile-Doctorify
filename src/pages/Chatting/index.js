import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components'
import { fonts, colors } from '../../utils'


export default function Chatting({ navigation }) {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title="Nairobi Putri Hayza" subtitle="Dokter Anak" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
                <ChatItem isMe/>
                <ChatItem />
                <ChatItem isMe/>
            </View>
            <InputChat />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        borderRadius: 10,
    },
    content: {
        flex: 1
    },
    chatDate: {
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        fontSize: 11,
        marginVertical: 20,
        textAlign: 'center'
    }
})
