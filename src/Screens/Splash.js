import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ScreenNames from '../../routes/screenNames';

const Splash = props => {
  const navigatoToHome = () => {
    props.navigation.navigate(ScreenNames.home);
  }


  useEffect(() => {
      setTimeout(() => {
        navigatoToHome()
      }, 150);
  } , [])

  return (
    <View style={styles.container}>
      <Button title="Home" onPress={navigatoToHome} />
    </View>
  )
}


export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})