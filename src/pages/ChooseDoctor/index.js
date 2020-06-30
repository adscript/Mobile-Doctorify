import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, List } from '../../components'
import { DummyDoctor4, DummyDoctor5, DummyDoctor6, DummyDoctor8, DummyDoctor7 } from '../../assets'
import { colors } from '../../utils'

export default function ChooseDoctor({ navigation }) {
    return (
        <View style={styles.page}>
            <Header title="Pilih Dokter Anak" type="dark" onPress={() => navigation.goBack()} />
            <List type="next" profile={DummyDoctor4} name="Alexander Jannie" desc="Wanita" onPress={() => navigation.navigate('Chatting')} />
            <List type="next" profile={DummyDoctor5} name="John McParker Steve" desc="Pria" onPress={() => navigation.navigate('Chatting')} />
            <List type="next" profile={DummyDoctor6} name="Nairobi Putri Hayza" desc="Wanita" onPress={() => navigation.navigate('Chatting')} />
            <List type="next" profile={DummyDoctor7} name="James Rivillia" desc="Pria" onPress={() => navigation.navigate('Chatting')} />
            <List type="next" profile={DummyDoctor8} name="Liu Yue Tian Park" desc="Wanita" onPress={() => navigation.navigate('Chatting')} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
