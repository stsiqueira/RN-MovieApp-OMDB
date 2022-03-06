import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { globalStyles } from '../styles/GlobalStyles'

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Header />
      <Search />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})