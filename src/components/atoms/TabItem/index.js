import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconHospitals, IconMessages, IconDoctorActive, IconDoctor, IconMessagesActive, IconHospitalsActive } from '../../../assets/icons'
import { fonts, colors } from '../../../utils'

export default function TabItem({ title, active, onPress, onLongPress }) {
    const Icon = () => {
        if (title === 'Messages')
            return active ? <IconMessagesActive /> : <IconMessages />
        if (title === 'Hospitals')
            return active ? <IconHospitalsActive /> : <IconHospitals />
        return active ? <IconDoctorActive /> : <IconDoctor />
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    text: active => ({
        fontSize: 10,
        fontFamily: fonts.primary[600],
        marginTop: 4,
        color: active ? colors.text.menuActive : colors.text.menuInactive,
    })
})
