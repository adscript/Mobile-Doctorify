import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Header, Input, Button, Gap } from '../../components';
import { colors } from '../../utils';

const Register = ({navigation}) => {
    return (
        <SafeAreaView style={styles.page}>
            <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Input label="Full Name" />
                <Gap height={24} />
                <Input label="Pekerjaan" />
                <Gap height={24} />
                <Input label="Email" />
                <Gap height={24} />
                <Input label="Password" />
                <Gap height={40} />
                <Button title="Continue" onPress={() => navigation.navigate('UploadPhoto')}/>
            </View>
        </SafeAreaView>
    )
}

export default Register;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        padding: 40,
        paddingTop: 0,
    }
})
