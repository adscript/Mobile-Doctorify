import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'


export default function InputChat() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
            <Button title="send" type="btn-icon" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
    },
    input: {
        backgroundColor: colors.disable,
        padding: 14,
        flex: 1,
        borderRadius: 10,
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.text.primary,
        marginRight: 10,
        maxHeight: 45
    }
})
