import React, {useEffect} from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { ILLogo } from '../../assets'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000)
    }, [])

    return (
        <SafeAreaView
            style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>
                Doctorify
            </Text>
        </SafeAreaView >
    )
}

export default Splash;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#112340',
        marginTop: 10
    }
})
