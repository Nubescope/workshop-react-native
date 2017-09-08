import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return <View style={styles.container} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
