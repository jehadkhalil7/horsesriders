import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Images from '../assets/Images/images'
import { expertise } from '../res/Data'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../../routes/screenNames'
import { Sizes } from '../res/Sizes'
const Coashitem = (props) => {
    const { data } = props
    const navigation = useNavigation()
    console.log("data from coach item", props);
    const renderName = () => {
        // const namec = data.name.map(na => {
        //     return <Text>{na} </Text>
        // })
        return <Text style={styles.name5}>{data?.name || ''}
        </Text>
    }
    const renderQualifications = () => {
        const qualificationsC = data?.qualifications?.map(qu => {
            return <Text style={styles.qualifications5}>{qu}</Text>
        })
        return qualificationsC || <Text></Text>
    }
    const goToJehad = () => {
        const obj = {
            name: data.name,
            phone: data.phone,
        }
        navigation.navigate(ScreenNames.jehad, { ...obj })
    }
    return (
        <Pressable onPress={goToJehad} style={styles.card} >
            <View style={styles.Container} >
                <Image resizeMode='contain' style={styles.serviceImage} source={data?.img} />
                <View style={styles.name3} >
                    {renderName()}
                    {renderQualifications()}
                </View>
            </View>
            <View style={styles.star2}>
                <Image style={styles.star} source={Images.starEmpty()} />
                <Image style={styles.star} source={Images.starEmpty()} />
                <Image style={styles.star} source={Images.starEmpty()} />
                <Image style={styles.star} source={Images.starEmpty()} />
                <Image style={styles.star} source={Images.starEmpty()} />
            </View>
        </Pressable>
    )
}
export default Coashitem
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#c4be91",
        borderWidth: 1,
        margin: 5,
        padding: 10,
        width: Sizes.screenWidth * 0.95
    },
    name3: {
    },
    star2: {
        color: 'red',
        flexDirection: 'row',
    },
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    serviceImage: {
        height: 100,
        width: 80,
    },
    name5: {
        fontSize: 22,
        color: 'black',
        fontStyle: 'italic',
        textAlign: 'auto'
    },
    qualifications5: {
        fontSize: 22,
        color: 'black',
        right: 5,
        fontStyle: 'italic',
        textAlign: 'auto'
    },
    star: {
        height: 30,
        width: 30,
    }
})