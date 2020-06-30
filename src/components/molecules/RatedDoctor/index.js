import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDoctor1, IconStar } from '../../../assets'
import { fonts, colors } from '../../../utils'

export default function RatedDoctor() {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor1} style={styles.avatar} />
            <View style={styles.doctorName}>
                <Text style={styles.name}>Alexa Rachel</Text>
                <Text style={styles.category}>Pediatrician</Text>
            </View>
            <View style={styles.rateWrapper}>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 8,
        paddingBottom: 16,
        justifyContent: 'space-between'
    },
    doctorName: {
        flex: 1,
    },
    rateWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 12,
    },
    name: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2,
    }
})
