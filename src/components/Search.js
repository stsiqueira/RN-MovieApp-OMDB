import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
import { FetchData } from '../services/Api';
import Movie from './Movie';
import { globalStyles } from '../styles/GlobalStyles';


const Search = () => {
  const [ text, setText ] = useState('')
  const [ movie, setMovie ] = useState()

  const handleSearch = async () =>{
    const data = await FetchData(text)
    setMovie(data)
    console.log(data.Poster)
  }
  return (
    <View style={[globalStyles.container]}>
      <View style={styles.searchContainer}>
        <TextInput style={globalStyles.input} value={text} onChangeText={setText}/>
        <Button title="Search" onPress={handleSearch}/>
      </View>
      {
        movie ? (
          <Movie movie={movie}/>
        ): (
          <View style={globalStyles.movieContainer}>
            <Text>Nothing to show yet</Text>
          </View>
        )}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer:{
    paddingVertical:24,
    paddingHorizontal:20,
    flexDirection:'row',
  },

})