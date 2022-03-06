import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'

const Movie = ( { movie }) => {
  const {Poster, Title, Year} = movie
  return (
    <View style={globalStyles.movieContainer}>
      <Image
        style={styles.image}
        source={{
          uri: Poster,
        }}
      />
      <Text style={styles.title}> {Title} </Text>
      <Text style={styles.year}>Year: {Year}</Text>
      <Button title='Do nothing'/>
    </View>
  )
}

export default Movie

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    borderWidth:1,
    width:250,
    height:350,
    marginBottom:24
  },
  title:{
    fontSize:24,
    fontWeight:'600',
    marginBottom:16
  },
  year:{
    fontSize:18,
    fontWeight:'500'
  }
})