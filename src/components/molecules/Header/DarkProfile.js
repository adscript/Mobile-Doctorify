import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { colors, fonts } from '../../../utils';
import { DummyDoctor6 } from '../../../assets';
import { Button } from '../../atoms';

const DarkProfile = ({ onPress, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon='back-light' onPress={onPress} />
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image source={DummyDoctor6} style={styles.avatar} />
        </View>
    )
}

export default DarkProfile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: colors.white,
        fontFamily: fonts.primary[600],
        fontSize: 20,
        
    },
    subtitle: {
        color: colors.text.secondary,
        fontFamily: fonts.primary[400],
        fontSize: 14,
        textAlign: 'center'
    },
    avatar: {
        width: 46,
        height: 46,

    }
})
