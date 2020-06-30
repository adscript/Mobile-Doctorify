import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap } from '../../components'
import { fonts, colors } from '../../utils'

const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" onPress={() => navigation.navigate('Register')} />
                <Gap height={16} />
                <Button type="secondary" title="Sign in" onPress={() => navigation.replace('Login')}/>
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        flex: 1,
    },

    title: {
        fontSize: 28,
        color: colors.text.primary,
        marginTop: 91,
        lineHeight: 34,
        fontFamily: fonts.primary[600],
        maxWidth: 244,
    }

})
