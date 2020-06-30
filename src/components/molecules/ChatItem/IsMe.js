import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

export default function IsMe() {
    return (
        <View style={styles.container}>
            <View style={styles.chatContent}>
                <Text style={styles.text}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
            </View>
            <Text style={styles.date}>4.20 AM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingRight: 16,
    },
    chatContent: {
        maxWidth: '70%',
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.cardLight,
        borderRadius: 10,
        borderBottomRightRadius: 0,
    },
    text: {
        fontFamily: fonts.primary[400],
        color: colors.text.primary,
        fontSize: 14,
    },
    date: {
        paddingTop: 8,
        fontFamily: fonts.primary[400],
        fontSize: 11,
        color: colors.text.secondary
    }
})
