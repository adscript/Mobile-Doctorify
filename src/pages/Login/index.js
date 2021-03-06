import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets';
import { Input, Link, Button, Gap } from '../../components';


const Login = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={10} />
            <Link text="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
            <Gap height={30} />
            <Link text="Create New Account" size={16} align="center" />
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        flex: 1,
    },
    title: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 20,
        color: '#112340',
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153,
    }
})
