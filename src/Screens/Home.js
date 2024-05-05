import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ServirseComponent from '../components/servirseComponent'
import { Servises } from '../res/Data'
import Carltem from '../components/carltem'
import Images from '../assets/Images/images'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../../routes/screenNames'
const Home = () => {
  const navigation = useNavigation()
  const goToHorse = (ItemData) => {
    navigation.navigate(ScreenNames.HorseNormalization, { id: ItemData.id })
  };
  const renderServices = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => goToHorse(item?.data)} style={styles.serviceContainer}>
        <Text style={styles.serviceText}>
          {item.data?.text}
        </Text>
        <Image resizeMode='contain' style={styles.serviceImage} source={item.img} />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={Servises}
          renderItem={renderServices}
          contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center', padding: 10 }}
        />
        {/* {renderCars()} */}
        {/* <ServirseComponent /> */}
      </View>
    </View>
  )
}
export default Home
const styles = StyleSheet.create({
  serviceContainer: {
    width: 400,
    height: 150,
    borderWidth: 1,
    margin: 5,
    backgroundColor: "#c4be91"
  },
  serviceText:
  {
    fontSize: 20,
    right: 10,
    top: 10,
    color: 'black',
    fontStyle: 'italic'
  },
  serviceImage:
  {
    width: 150,
    height: 100,
  },
  starEmpty: {
    width: 30,
    height: 30,
  },
})