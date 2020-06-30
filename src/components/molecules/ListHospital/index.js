import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'

export default function ListHospital({ type, name, address, pic }) {
    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.image} />
            <View>
                <Text style={styles.name}>{type}</Text>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{address}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    image: {
        width: 80,
        height: 60,
        marginRight: 16,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary,
    },
    desc: {
        fontFamily: fonts.primary[300],
        fontSize: 12,
        color: colors.text.secondary,
        marginTop: 6
    }
})
