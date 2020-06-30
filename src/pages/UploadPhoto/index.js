import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { Header, Link, Button, Gap } from '../../components';
import { ILNullPhoto, IconAddPhoto } from '../../assets';
import { colors, fonts } from '../../utils';

const UploadPhoto = () => {
    return (
        <SafeAreaView style={styles.page}>
            <Header title="Upload Photo" />
            <View style={styles.content}>
                <View style={styles.profil}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <IconAddPhoto style={styles.addPhoto} />
                    </View>
                    <Gap height={26}/>
                    <Text style={styles.name}>Adnan Radja Maulana</Text>
                    <Text style={styles.profession}>Frontend Developer</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" />
                    <Gap height={30} />
                    <Link text="Skip for this" align="center" size={16}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default UploadPhoto;

const styles = StyleSheet.create({
    profil: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 40,
        flex: 1,
        justifyContent: 'space-between'
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        justifyContent: "center",
        alignItems: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6,
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary
    }
})
