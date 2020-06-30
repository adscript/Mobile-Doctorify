import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { IconNext, IconEditProfile, IconLanguage, IconRate, IconHelp } from '../../../assets'

export default function List({ profile, name, desc, type, onPress, icon }) {
    const Icon = () => {
        if (icon === 'edit-profile')
            return <IconEditProfile />
        if (icon === 'language')
            return <IconLanguage />
        if (icon === 'rate')
            return <IconRate />
        return <IconHelp />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ?
                <Icon />
                :
                <Image source={profile} style={styles.image} />
            }
            <View style={styles.title}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.chat}>{desc}</Text>
            </View>
            {type === 'next' && <IconNext />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderColor: colors.border,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        flex: 1,
        marginLeft: 16,
    },
    image: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12,
    },
    name: {
        fontFamily: fonts.primary[400],
        fontSize: 16,
        color: colors.text.primary,
    },
    chat: {
        fontFamily: fonts.primary[300],
        fontSize: 12,
        color: colors.text.secondary,
    },
})
