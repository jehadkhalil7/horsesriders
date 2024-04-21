import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../assets/Images/images'

const ServirseComponent = () => {
    return (
        <View style={styles.container}>
            <Text>dfghjkl</Text>
            <Text>dfghjkl</Text>
            <Image source={Images.user()}/>
            
        </View >
    )
}

export default ServirseComponent

const styles = StyleSheet.create({
    txt: {
        fontSize: 25,
    },
    container: {
        borderWidth: 1,
        paddingLeft: 20,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'35%'
    },
});
