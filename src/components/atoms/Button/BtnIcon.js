import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconSendActive, IconSendInactive } from '../../../assets'
import { colors } from '../../../utils'

export default function BtnIcon({ onPress, disable }) {
    return (
        <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
            {
                !disable ?
                    <IconSendActive />
                    :
                    <IconSendInactive />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (disable) => ({
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 8,
        paddingLeft: 8,
        width: 45,
        height: 45,
        borderRadius: 10,
        backgroundColor: !disable ? colors.active : colors.disable,
    })
})
