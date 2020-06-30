import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'
import { DummyDoctor6 } from '../../../assets'

export default function Other() {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor6} style={styles.avatar} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
                </View>
                <Text style={styles.date}>4.20 AM</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection: "row"
    },
    chatContent: {
        maxWidth: '85%',
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
    },
    text: {
        fontFamily: fonts.primary[400],
        color: colors.white,
        fontSize: 14,
    },
    date: {
        paddingTop: 8,
        fontFamily: fonts.primary[400],
        fontSize: 11,
        color: colors.text.secondary
    },
    avatar: {
        width: 30,
        height: 30,
        marginRight: 12,
    }
})

