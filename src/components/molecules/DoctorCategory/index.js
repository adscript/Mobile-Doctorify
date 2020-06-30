import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ILCatUmum, ILCatPsikiater, ILCatObat, ILCatAnak } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atoms'

export default function DoctorCategory({ category, onPress }) {
    const Icon = () => {
        if (category === 'psikiater')
            return <ILCatPsikiater />
        if (category === 'dokter obat')
            return <ILCatObat />
        if (category === 'dokter anak')
            return <ILCatAnak />
        return <ILCatUmum />
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon />
            <Gap height={28} />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: "flex-start",
        marginRight: 10,
        borderRadius: 10,
        width: 100,
        height: 130,
    },
    label: {
        fontFamily: fonts.primary[400],
        color: colors.text.primary,
        fontSize: 12
    },
    category: {
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        fontSize: 12
    }
})
