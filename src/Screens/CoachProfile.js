import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CoachProfile = (props) => {
  const { name, qualifications, expertise, rating } = props.route.params

  console.log('data: ', expertise);

  const renderExperties = () => {
    return expertise?.map(exp => (<Text style={styles.text}>{exp.text}</Text> )) 
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{qualifications}</Text>
      {/* <Text>{expertise}</Text>  */}
      <Text>{rating}</Text>
      {renderExperties()}
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
  }
})