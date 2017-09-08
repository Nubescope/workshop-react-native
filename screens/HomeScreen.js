import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Artista from '../components/Artista'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Artista />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
})
