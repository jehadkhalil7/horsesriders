import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../assets/Images/images';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../routes/screenNames';
const Carltem = props => {
  // const [like /** state */, setLike /*setState */] = useState(0)
  const navigation = useNavigation();

  const navHome = ( ) => {
    navigation.navigate(ScreenNames.home);
  }

  const onItemPress = () => {
    setLike(like + 1)
  }; 


  // console.log('likes: ', like, "brand: ", brand);
  return (
    // <TouchableOpacity onPress={onItemPress}>
    <View style={styles.card}>
      <Image source={Images.angle()} style={styles.angle} />
      <Image source={Images.menu()} style={styles.menu} />
      <Image source={Images.rotate()} style={styles.rotate} />

      {/* <Image source={Images.home()} style={styles.home} /> */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navHome()}>
          <Image source={Images.home()} style={styles.home} />
        </TouchableOpacity>

        {/* <Image source={Images.menu()} style={styles.menu} /> */}
        <Image source={Images.user()} style={styles.user} />

        <View style={styles.container1}>
          <Text style={styles.txt}>{`user name: ` + props.brand}</Text>
          <Image source={Images.call()} style={styles.call} />
          <Image source={Images.envelope()} style={styles.envelope} />

          <Image source={Images.search()} style={styles.search} />
          <Image source={Images.marker()} style={styles.marker} />
          {/* <Image source={Images.()} style={styles.} /> */}
          {/* <Text style={styles.txt}>{`user name: ` + props.brand}</Text> */}
          <View style={styles.txtContainer}>
            {/* <Text style={styles.txt}>{`user name: ` + props.brand}</Text> */}
            <Text style={styles.txt}>{`phone number: ${props.year}`}</Text>
            <Text style={styles.txt}>{'KM: ' + props.km}</Text>
            <Text style={styles.txt}>{'like: ' + props.like}</Text>
          </View>
          {/* { <Image style={styles.img} source={props.img} />} */}
        </View>
      </View>
    </View>
    // </TouchableOpacity>
  )
}

export default Carltem

const styles = StyleSheet.create({
  card: {
    Width: '100%',
    height: '100%',
  },
  txt: {
    fontSize: 25,
  },
  container: {
    padding: 40,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 3,
    margin: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  container1: {
    right: 40,
    // flex: 1,
    // width: 40,
    // height: 40,
    // borderWidth: 1,
    paddingLeft: 20,
  },
  plus: {
    fontSize: 45,
    textAlign: 'center',
  },
  plusContainer: {
    borderWidth: 2,
    flex: 1,
  },
  txtContainer: {
    bottom: 80,
    right: 26,
    borderWidth: 0,
    marginTop: 20,
    // flex: 1,
  },
  user: {
    right: 15,
    width: 30,
    height: 30,
    margin: 8,
    borderWidth: 2,
    alignItems: 'flex-start',
  },
  call: {
    left: 330,
    width: 20,
    height: 20,
    margin: 2,
    borderWidth: 2,
    alignItems: 'flex-start',
  },
  search: {
    left: 330,
    width: 20,
    height: 20,
    margin: 2,
    borderWidth: 2,
    alignItems: 'flex-start',
  },
  marker: {
    left: 330,
    width: 20,
    height: 20,
    margin: 2,
    borderWidth: 2,
    alignItems: 'flex-start',
  },
  home: {
    bottom: 35,
    width: 20,
    height: 20,
    margin: 0,
    borderWidth: 0,
    alignItems: 'flex-start',
  },
  envelope: {
    left: 330,
    width: 20,
    height: 20,
    margin: 2,
    borderWidth: 2,
    alignItems: 'flex-start',
  },
  menu: {
    left: 380,
    width: 20,
    height: 20,
    margin: 2,
    borderWidth: 2,
    alignItems: 'flex-start',
  },
  rotate: {
    left: 350,
    bottom: 25,
    width: 20,
    height: 20,
    margin: 2,
    borderWidth: 2,
    alignItems: 'flex-start',
  },
  angle: {
    // left: 380,
    // bottom:0,
    top: 30,
    width: 20,
    height: 20,
    margin: 2,
    borderWidth: 2,
    alignItems: 'flex-start',
  },
})