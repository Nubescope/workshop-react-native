import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Artista from '../components/Artista'

const artista = {
  name: 'Luis Alberto Spinneta',
  image: 'https://lh6.googleusercontent.com/eOcwBtI4_kBP2prhL0A5puNNUCNAlawW6guVHltl6L4=s865-no',
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Artista datos={artista} />
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
