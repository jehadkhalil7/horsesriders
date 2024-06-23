import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../assets/Images/images';

const CoachProfile = (props) => {
  const { name, qualifications, expertise, rating } = props.route.params

  console.log('data: ', expertise);

  const renderExperties = () => {
    return expertise?.map(exp => (<Text style={styles.text}>{exp.text}</Text>))
  };

  return (
    <View style={styles.container}> 
    <Image style={styles.user} source={Images.user()} />
      <Text>{name}</Text>
      <Text>{qualifications}</Text>
      {/* <Text>{expertise}</Text>  */}
      <Text>{rating}</Text>
      {/* {renderExperties()} */}
     
    </View>
  )
}

export default CoachProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    // color: 'red'
  },
  user: {
    top: 1,
    height: 100,
    width: 100,
    left: 10,
  },
  name: {
    fontSize: 10,
  },
})