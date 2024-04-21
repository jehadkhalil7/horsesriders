import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HORSE, Servises, coachs } from '../res/Data'
import ScreenNames from '../../routes/screenNames'
import { useNavigation } from '@react-navigation/native'
import Coashitem from './Coashitem'

const HorseNormalization = (props) => {

  const { navigation } = props

  const [coachsArr, setCoachsArr] = useState([])

  const { id } = props.route.params;
  console.log("id: ", id);

  // return (
  //   // <Carltem
  //   //   img={car.img}
  //   // />
  //   <TouchableOpacity onPress={goToHorse} style={styles.serviceContainer}>
  //     <Text style={styles.serviceText}>
  //       {car.item.text}
  //     </Text>
  //     <Image resizeMode='contain' style={styles.serviceImage} source={car.item.img} />
  //   </TouchableOpacity>
  // );
  //   const HorseNormalization = () => {
  //     const navigation=useNavigation()
  //       const goToHorse=()=>{
  //         navigation.navigate(ScreenNames.HorseNormalization)
  //       }


  // return (
  // <Carltem
  //   img={car.img}
  // />
  // <TouchableOpacity onPress={goToHorse} style={styles.serviceContainer}>
  //   <Text style={styles.serviceText}>
  //     {car.item.text}
  //   // style={styles.container5}

  //   </Text>
  //   <Image resizeMode='contain' style={styles.serviceImage} source={car.item.img} />
  // </TouchableOpacity>
  // );

  const renderServices = ({ item }) => {
    return (
      <Coashitem data={item} />
    )
  };


  const getCoachs = () => {
    const filterdArr = coachs.filter(coach => !!coach.expertise.find(ex => ex.id === id))

    console.log("filterdArr: ", filterdArr);

    setCoachsArr([...filterdArr])
  }


  useEffect(() => {
    getCoachs()
  }, [])



  return (
    <View>
      <View style={styles.container}>
        {coachsArr.length > 0 && <FlatList
          data={coachsArr}
          renderItem={renderServices}
          contentContainerStyle={styles.flatList}
        />}
      </View>
    </View>

  )
}


export default HorseNormalization
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
    color: 'black',
    fontStyle: 'italic'
  },
  serviceImage:
  {
    width: 150,
    height: 100
  },
  flatList: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  }
});