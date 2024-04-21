import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Images from '../assets/Images/images'
import { expertise } from '../res/Data'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../../routes/screenNames'

const Coashitem = (props) => {
    const { data } = props
    const navigation = useNavigation()
    console.log("data from coach item", props);
    const renderName = () => {
        // const namec = data.name.map(na => {
        //     return <Text>{na} </Text>
        // })
        return <Text style={styles.name5}>{data?.name || ''}</Text>
    }
    const renderQualifications = () => {
        const qualificationsC = data?.qualifications?.map(qu => {
            return <Text style={styles.qualifications5}>{qu}</Text>
        })

        return qualificationsC || <Text></Text>
    }

    const goToJehad = () => {
        const obj = {
            name:data.name,
            phone:data.phone,
        }
        navigation.navigate(ScreenNames.jehad , {...obj})
    }

    return (
        <Pressable onPress={goToJehad} style={styles.Container}>
            <Image resizeMode='contain' style={styles.serviceImage} source={data?.img} />
            <View>
            {renderName()}
            {renderQualifications()}
            </View>
        </Pressable>
    )
}

export default Coashitem
const styles = StyleSheet.create({
    Container: {
    width: 400,
    height: 150,
    borderWidth: 1,
    margin: 5,
    backgroundColor: "#c4be91",
    flexDirection:'row',
    justifyContent:'space-between'

    },
    serviceImage: {
    height: 100,
    width: 80,
    },
    name5:{
    fontSize: 22 ,
    color: 'black',
    fontStyle: 'italic',
    textAlign:'auto'
    },
    qualifications5:{
    fontSize: 22 ,
    color: 'black',
    right:5,
    fontStyle: 'italic',
    textAlign:'auto'
    }
})