import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>OMDB API Movie App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    paddingTop:24,
    alignItems: 'center'
  },
  header:{
    fontSize:22,
    fontWeight: '600'
  }
})